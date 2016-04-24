'use strict';

import mongoose from 'mongoose';


const MessageSchema = mongoose.Schema({
    text: String,
    timestamp: { type: Date, default: Date.now },
    user: mongoose.Schema.Types.ObjectId
});

export default mongoose.model('Message', MessageSchema);