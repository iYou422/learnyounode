var net = require('net');

function fillZero(num) {
  return (num < 10 ? ("0" + num) : num);
}

function now() {
  var d = new Date();
  return d.getFullYear() + "-" +
    fillZero(d.getMonth() + 1) + "-" +
    fillZero(d.getDate()) + " " +
    fillZero(d.getHours()) + ":" +
    fillZero(d.getMinutes()) + "\n";
}

var server = net.createServer(function(socket) {
  socket.write(now());
  socket.end();
})
server.listen(process.argv[2]);

/******************************************************/

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now() {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function(socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

/*******************************************************/
// var net = require('net');
// var strftime = require('strftime');

// var server = net.createServer(function(socket) {
//   socket.write(strftime('%Y-%m-%d %H:%M\n'));
//   socket.end();
// })
// server.listen(process.argv[2]);