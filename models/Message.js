'use strict';

import mongoose from 'mongoose';


const MessageSchema = mongoose.Schema({
    text: String,
    timestamp: { type: Date, default: Date.now },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('Message', MessageSchema);