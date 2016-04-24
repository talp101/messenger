/**
 * Created by Shmulik on 4/24/2016.
 */
'use strict';

import express from 'express';
const router = express.Router();

import Message from '../models/Message';

router.get('/', function(req, res, next) {
   let conversationId = req.params['conversationId'];

});