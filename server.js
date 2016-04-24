'use strict';
import express from 'express';
import path from 'path';

const app = express();

app.use('/static', express.static('static'));

app.get('/' , (request, response) => {
    response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(5858, (err)=>{
    if(err)
        console.log(err)
    console.log('server started at port 3000');
});