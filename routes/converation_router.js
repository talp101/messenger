import express from 'express';
import Conversation from '../models/Conversation';

const router = express.Router();

router.route('/')
    .get(function (req, res, next){
        Conversation.find().populate('between').exec(function(err, converstaions){
            if(err)
                res.send(err);
            res.json(converstaions);
        })
    })
    .post(function(req, res, next){
        let conversation = new Conversation();
        conversation.between = req.body.between;
        conversation.save(function(err){
            if(err)
                res.send(err);
            res.json(conversation);
        });
    });

router.route('/:conversationId')
    .get(function(req, res, next){
        Conversation.findById(req.params.conversationId).populate('messages').exec(function (err, conversation) {
            if(err)
                res.send(err);
            res.json(conversation);
        })
    });

export default router;