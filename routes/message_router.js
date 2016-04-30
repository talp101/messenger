import express from 'express';
const router = express.Router();

import Message from '../models/Message';
import Conversation from '../models/Conversation';

router.post('/', function (req, res, next) {
    console.log(req.body);
    let conversationId = req.body.conversationId;
    let userId = req.body.userId;

    let newMessage = Message({
        text: req.body.text,
        user: userId
    });
    newMessage.save(function (err) {
        if (err)
            throw err;
    });

    Conversation.findById(conversationId).populate('messages').exec(function (err, conversation){
        conversation.messages.push(newMessage);
        conversation.save(function (err) {
            if (err)
                throw err;

            res.json(conversation);
        });
    });
});

export default router;