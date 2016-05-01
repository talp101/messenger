import express from 'express';
import User from '../models/User';
import Conversation from '../models/Conversation';

const router = express.Router();

router.route('/')
    .get(function (req, res, next){
        User.find(function(err, users){
            if(err)
                res.send(err);
            res.json(users);
        })
    })
    .post(function(req, res, next){
        User.findOne({userName: req.body.userName}).exec((err, user) => {
            if(user !== null){
                res.json(user);
            }
            else{
                let newUser = new User();
                newUser.userName = req.body.userName;
                newUser.firstName = req.body.firstName;
                newUser.lastName = req.body.lastName;
                newUser.save(function(err){
                    if(err)
                        res.send(err);
                    res.json(newUser);
                });
            }
        })

    });

router.route('/:userId/conversations')
    .get(function(req, res, next){
        Conversation.find({between: req.params.userId}).populate('between').populate({path:'messages', options:{sort:{"timestamp":-1}}}).exec(function(err, converstaions){
            if(err) res.send(err);
            res.json(converstaions);
        });
    });

export default router;