var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var motor = new five.Motor(9)

  motor.on('start', function () {
    board.wait(2000, function () {
      stopMotor()

      board.wait(1000, startMotor)
    })
  })

  startMotor()

  function startMotor () {
    motor.start(200)
  }

  function stopMotor () {
    motor.stop()
  }
})
