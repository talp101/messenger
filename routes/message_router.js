/**
 * Created by Shmulik on 4/24/2016.
 */
'use strict';

import express from 'express';
const router = express.Router();

let bodyParser = require('body-parser');
express().use(bodyParser.json());

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

    Conversation.findById(conversationId, function (err, conversation) {
        console.log('Conversation id: ' + conversationId);
        conversation.messages.push(newMessage);
        conversation.save(function (err) {
            if (err)
                throw err;

            res.json(conversation);
        });
    });
});

export default router;