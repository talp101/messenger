exports = module.exports = function(io) {
    io.on('connection', (socket) =>  {
        socket.on('new message', (message) => {
            socket.broadcast.emit('new socket server', message);
        });
    });
};