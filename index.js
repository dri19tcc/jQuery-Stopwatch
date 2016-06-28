function StopWatch(callback) {
  this._time = 0
  this._interval = null
  this._delay = 10
  this._callback = callback

  this.start = function() {
    if (this._interval) { return } // this solves the double click problem
    this._interval = setInterval(this.addTime.bind(this), this._delay)
  }
  this.stop = function() { //stops the watch
    clearInterval(this._interval)
    this._interval = null
  }

  this.reset = function() { // resets the stopwatch
    clearInterval(this._interval)
    this._interval = null
    this._time = 0

  }

  this.addTime = function() { // adds time to the counter
    this._time += this._delay
    var hours = Math.floor(this._time*(60*60)%60)
    var minutes = Math.floor(this._time/(1000*60)%60)
    var seconds = (this._time/1000%60).toFixed(1)
    var milliseconds = (this._time).toFixed(1)

    if (hours < 10) {
      hours = "0" + hours
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }

    this._callback(hours + ":" + minutes + ":" + seconds)
  }
}

$(document).ready(function() {
  console.log("Yay, Hello!");

  var container = $("#stopWatch")
  var container2 = $("#stopWatch2")
  var container3 = $("#stopWatch3")

  var display = container.children(".display")
  var display2 = container2.children(".display")
  var display3 = container3.children(".display")

  var buttons = container.children("button.stopWatch")
  var buttons2 = container2.children("button.stopWatch")
  var buttons3 = container3.children("button.stopWatch")

  var stopWatch = new StopWatch(function(newTime) {
    //update the display
    display.text(newTime)
  })
  var stopWatch2 = new StopWatch(function(newTime) {
    //update the display
    display2.text(newTime)
  })
  var stopWatch3 = new StopWatch(function(newTime) {
    //update the display
    display3.text(newTime)
  })

  buttons.on("click", function(event) {
    event.preventDefault()

    // which buttond did I click?
    var button = $(this)
    // and what should I do in response?
    if (button.hasClass("start")) {
      stopWatch.start()
    } else if (button.hasClass("reset")) {
      stopWatch.reset()
      display.text("00:00:00:0")
    } else {
      stopWatch.stop()
    }
  })

  buttons2.on("click", function(event) {
    event.preventDefault()

    // which buttond did I click?
    var button = $(this)
    // and what should I do in response?
    if (button.hasClass("start")) {
      stopWatch2.start()
    } else if (button.hasClass("reset")) {
      stopWatch2.reset()
      display2.text("00:00:00:0")
    } else {
      stopWatch2.stop()
    }
  })

  buttons3.on("click", function(event) {
    event.preventDefault()

    // which buttond did I click?
    var button = $(this)
    // and what should I do in response?
    if (button.hasClass("start")) {
      stopWatch3.start()
    } else if (button.hasClass("reset")) {
      stopWatch3.reset()
      display3.text("00:00:00:0")
    } else {
      stopWatch3.stop()
    }
  })
})
