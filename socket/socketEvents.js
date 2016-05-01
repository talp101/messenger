exports = module.exports = function(io) {
    io.on('connection', (socket) =>  {
        socket.on('new message', (message) => {
            console.log(socket);
            console.log(message);
            socket.broadcast.emit('new socket server', message);
        });
    });
};

//export default socketEvents;