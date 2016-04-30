const socketEvents  = (io) => {
    io.on('connection', (socket) =>  {
        socket.on('new message', (message) => {
            console.log('new messaged recieved');
        });
    });
};

export default socketEvents;