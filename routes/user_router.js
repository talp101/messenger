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
        let user = new User();
        user.userName = req.body.userName;
        user.fistName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.save(function(err){
            if(err)
                res.send(err);
            res.json(user);
        });
    });

router.route('/:userId/conversations')
    .get(function(req, res, next){
        Conversation.find({between: req.params.userId}, function(err, converstaions){
            if(err) res.send(err);
            res.json(converstaions);
        });
    });

export default router;