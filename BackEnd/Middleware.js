const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).send("Token Required");
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user) =>{
        if(err){
            return res.status(403).send("Invalid Token");
        }
        req.user = user;
        next()
    })
}

module.exports = {verifyToken}