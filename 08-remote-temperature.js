var dnode = require('dnode')
var net = require('net')

var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  })

  var server = net.createServer(function (c) {
    var d = dnode({
      getTemperature: getTemperature
    })

    c.pipe(d).pipe(c)
  })

  server.listen(1337)

  function getTemperature (cb) {
    cb(temperature.celsius)
  }
})
