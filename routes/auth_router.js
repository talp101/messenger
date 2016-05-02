import express from 'express';

import  jwt from 'jsonwebtoken';
import User from '../models/User';


const secretKey = 'tagidliadmataisheshshanimveday';


const router = express.Router();


router.post('/', function(req, res, next) {
    User.findOne({
        userName: req.body.username
    } , (err,user) =>{
        if(err) throw err;
        if(!user){
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if(user){
            //const validPassword = user.comparePassword(req.body.password); //  Connect to ldap for comparing password
            const validPassword = true;
            if (!validPassword){
                res.json({
                    success: false,
                    message: 'Authentication failed, Wrong password.'
                });
            }else {
                const token = jwt.sign({
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName
                }, secretKey, {
                    expiresIn: '1h' 
                });
                
                res.json({
                    success: true,
                    message: "Authentication succeeded",
                    token: token,
                    user: user
                });
            }
        }

    })
});

export default router;