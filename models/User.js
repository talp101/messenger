'use strict';

import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});

export default mongoose.model('User', UserSchema);