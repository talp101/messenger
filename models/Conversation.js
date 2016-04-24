'use strict';

import mongoose from 'mongoose';
import Message from './Message';

const conversationSchema = mongoose.Schema({
    between: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    messages: [Message]
});

export default mongoose.model('Conversation', conversationSchema);