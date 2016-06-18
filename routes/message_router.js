import express from 'express';
const router = express.Router();

import Message from '../models/Message';
import Conversation from '../models/Conversation';

router.post('/', function (req, res, next) {
    let conversationId = req.body.conversationId;
    let userId = req.body.userId;

    let newMessage = Message({
        text: req.body.text,
        user: userId,
        seenByUsers: [userId]
    });
    newMessage.save(function (err) {
        if (err)
            throw err;
    });

    Conversation.findById(conversationId).populate('messages').populate('between').exec(function (err, conversation){
        conversation.messages.push(newMessage);
        conversation.save(function (err) {
            if (err)
                throw err;
            res.json(conversation);
        });
    });
})

router.put('/:messageId', (request, response, next) => {
    Message.findByIdAndUpdate(request.body.messageId, { $addToSet: {seenByUsers: request.body.userId }}, {safe:true, upsert:true}, (err, message)=>{
      return response.json(message);
    })
});


export default router;
