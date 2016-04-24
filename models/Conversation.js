'use strict';

import mongoose from 'mongoose';
import Message from './Message';

const conversationSchema = mongoose.Schema({
    between: Array,
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}]
});

export default mongoose.model('Conversation', conversationSchema);