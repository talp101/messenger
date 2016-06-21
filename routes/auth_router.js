import express from 'express';

import  jwt from 'jsonwebtoken';
import User from '../models/User';
import request from 'request';


const secretKey = 'tagidliadmataisheshshanimveday';

const authenticationUrl = process.env.AUTH_URL;


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
            request({url:authenticationUrl, method:"POST", json:true, body:req.body}, (err, authResponse, body) => {
              if(body.hasOwnProperty('error')){
                res.json({
                  success:false,
                  message:'Authentication failed, Wrong password'
                })
              }
              else{
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
            });
            const validPassword = true;
        }
    })
});

export default router;
