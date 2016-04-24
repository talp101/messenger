'use strict';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

import conversations from './routes/converation_router'

process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/messenger';
process.env.PORT = process.env.PORT || 3485;

mongoose.connect(process.env.MONGOLAB_URI);


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('static'));


app.use('/api/conversations', conversations);
app.get('/' , (request, response) => {
    response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(process.env.PORT, (err)=>{
    if(err)
        console.log(err);
    console.log('server started at port 3485');
});