//Capital letters StopWatch is a constructor, so somewhere you'll say new StopWatch
//You can do this with prototypes if it was inheriting to others, but it's not so
// it's in the constructor
function StopWatch(callback) { // using a closure, make it accept a callback, it has a dependency on something it didn't define
  this._time = 0
  this._interval = null
  this._delay = 100
  this._callback = callback

  this .start = function() { // starts the watch
    // all javascript functions know bind and bind binds the context to the function
    // so that whatever the functional context would have been, it's replaced with the
    // functional context of what the current scope is
    if (this._interval) { return } // this solves the double click problem
      this._interval = setInterval(this.addTime.bind(this), this._delay)
  }
  this.stop = function() { //stops the watch
    clearInterval(this._interval)
    this._interval = null
  }

  this.addTime = function() { // adds time to the counter
    // console.log(this)
    this._time += this._delay
    this._callback(this._time)
  }
}
//if you do this.callback = callback, you wouldn't need a closure. that's what we are doing

// add code here
$(document).ready(function() {
  console.log("Yay, Hello!");

  var container = $("#stopWatch")
  var display = container.children(".display")
  var buttons = container.children("button.stopWatch")
  var stopWatch = new StopWatch(function(newTime) {
    //update the display
    display.text(newTime)
  })
  // console.log(container);

  // console.log(display, buttons);

  buttons.on("click", function(event) {
    event.preventDefault()

    // which buttond did I click?
    var button = $(this)
    // console.log("you clicked me!")
    // and what should I do in response?
    if (button.hasClass("start")) {
      // console.log("start the watch!")
      stopWatch.start()
    } else {
      // console.log("stop the watch!")
      stopWatch.stop()
    }
    // console.log(this)
    // console.log(event)
  })
})
