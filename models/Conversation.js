'use strict';

import mongoose from 'mongoose';

const conversationSchema = mongoose.Schema({
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
    between: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}]
});

export default mongoose.model('Conversation', conversationSchema);