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
        const between = req.body.between;
        Conversation.find({between:between}).populate('messages').populate('between').exec((err, conversations) => {
          if(err)
            console.log(err);
          if(conversations.length === 0){
              let conversation = new Conversation();
              conversation.between = req.body.between;
              conversation.save(function(err){
                  if(err)
                      res.send(err);
                  res.json(conversation);
              });
            }
          else {
            res.json(conversations[0]);
          }
        })


    });

router.route('/:conversationId')
    .get(function(req, res, next){
        Conversation.findById(req.params.conversationId).populate('messages').populate('between').exec(function (err, conversation) {
            if(err)
                res.send(err);
            res.json(conversation);
        })
    });

export default router;
