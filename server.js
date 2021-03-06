'use strict';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import favicon from 'serve-favicon';

import conversations from './routes/converation_router'
import messages from './routes/message_router'
import users from './routes/user_router'
import contacts from './routes/contact_router'
import auth from './routes/auth_router'

import socketio from 'socket.io';

process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/messenger';
process.env.PORT = process.env.PORT || 3485;

mongoose.connect(process.env.MONGOLAB_URI);


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('static'));
app.use(favicon(__dirname + '/static/src/img/favicon.ico'));


app.use('/api/conversations', conversations);
app.use('/api/users', users);
app.use('/api/messages', messages);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

app.get('*' , (request, response) => {
    response.sendFile(path.join(__dirname, 'views/index.html'));
});

const server = app.listen(process.env.PORT,'0.0.0.0', (err)=>{
    if(err)
        console.log(err);
    console.log('server started at port 3485');
});

const io = new socketio(server, { path: '/api/chat' });
require('./socket/socketEvents')(io);
