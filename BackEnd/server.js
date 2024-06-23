const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const Users = require('./Models/userSchema.js')
const auth = require('./auth.js')
const refresh = require('./refresh');
const {verifyToken} = require('./Middleware.js')
require('dotenv').config()
app.use(cors());
app.use(express.json());
const saltRounds = 10;
const mongoUrl = process.env.MONGODB_URI;
const port = process.env.Port || 4080
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => {
    console.log("connected to database");
}).catch((e) => console.log(e))

// Login Route
app.post('/login',auth.login)
//  {
//     // const email = req.body.email;
//     // const password = req.body.password;
//     // try{
//     //     const user = await Users.findOne({email});
//     //     if(user){
//     //         const match = await bcrypt.compare(password,user.password);
//     //         console.log(match);
//     //         if(match){
//     //             res.json({message:"Login Successful",user:user});
//     //         }
//     //         else{
//     //             res.json({message:"Incorrect Password"});
//     //         }
//     //     }
//     //     else{
//     //         res.status(404).json({message:"User not found"})
//     //     }
//     // }
//     // catch(e){
//     //     console.error(e);
//     // }
// });
app.post('/logout', verifyToken, auth.logout);
app.post('/refresh', refresh);

app.post('/register',async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;

    try{
        const existingUser = await Users.findOne({email});
        if(existingUser){
            res.status(401).send('Existing User ,Please Login!');
        }
        else{
            const hashedPassword = await bcrypt.hash(password,saltRounds);
            const newUser = new Users({name:name,password:hashedPassword,email:email,phone:mobile});
            await newUser.save()
            res.send("User Created ").status(200)
        }
        
    }
    catch(e){
        console.log(e);
    }

    
})

app.post('/getmembership', verifyToken, async (req, res) => {
    try {
        const userData = req.user;
        if (!userData) {
            return res.status(401).json({ message: 'User data not found' });
        }
        const email = userData.email;
        const { membership } = req.body;
        const {timeId} = req.body;
        var {slots} = await Timings.findOne({timeId})
        const date = new Date();
        const purchasedOn = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const expiryDate = new Date(purchasedOn);
        expiryDate.setDate(expiryDate.getDate() + 30);
        const expiresOn = ` ${expiryDate.getDate()}/${expiryDate.getMonth() + 1}/${expiryDate.getFullYear()}`;
        if (!membership) {
            return res.status(400).json({ message: 'Plan ID is required' });
        }
        if(slots <=0){
            return res.status(401).json({message:'Slots Complete!'})
        }
        else{
            slots -= 1;
            const updatedUser = await Users.findOneAndUpdate(
                { email },
                { membership,purchasedOn,timeId,expiresOn},
                { new: true } 
            );
            const updatedTimings = await Timings.findOneAndUpdate({timeId},{slots})
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
        res.status(200).json({ message: 'Plan updated successfully', user: updatedUser });

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
const Timings = require('./Models/Timings.js')
app.get('/timings',async (req,res)=>{
    try{
        const timings = await Timings.find();
        res.send(timings)
    }
    catch(e){
        console.log(e);
    }
})

app.post('/checkmembership',verifyToken,async(req,res)=>{
    const userData = req.user;
    const email = userData.email;
    const user = await Users.findOne({email})
    res.send(user);
})

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:4080');
});
