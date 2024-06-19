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

app.post('/getmembership',verifyToken,async (req,res)=>{
    const userData = req.user;
    const email = userData.email;
    const {planId} = req.body;

    const user = await Users.findOne({email});

})

app.post('/checkmembership',verifyToken,async(req,res)=>{
    const userData = req.user;
    const email = userData.email;
    const user = await Users.findOne({email})
    res.send(user);
})

// Start the server
app.listen(4080, () => {
    console.log('Server is running on http://localhost:4080');
});
