const server = require('http').createServer();
const os = require('os-utils');
const moment = require('moment');

const timeNow = moment().format("HH:mm");

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
})

io.on('connection', client => {
  setInterval(() => {
    os.cpuUsage((cpuPercent) => {
      client.emit('cpu', {
        name: moment().format("HH:mm:ss"),
        value: cpuPercent,
      })
    })
  }, 1000)
})

server.listen(3000)
