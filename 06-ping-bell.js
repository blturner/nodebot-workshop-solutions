var dgram = require('dgram')
var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function () {
  var server = dgram.createSocket('udp4')
  var piezo = new five.Piezo(8)

  server.on('message', function () {
    piezo.play({
      song: [
        ['C4', 1 / 4]
      ],
      tempo: 100
    })
  })

  server.bind(1337)
})
