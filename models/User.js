'use strict';

import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});

UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
};

export default mongoose.model('User', UserSchema);