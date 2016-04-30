exports = module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('new message', function(message) {
            console.log('new messaged recieved');
        });
    });
};