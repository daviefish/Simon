





$('#start').on('click', function(){
      $('#container').removeClass('visible').addClass('hidden');
      $('.gameboard').removeClass('hidden').addClass('visible');
      $('#container').hide();

});

//make array out of gameboard pieces
var fourSquares = $('.gameboard').children();
var arr = $.makeArray(fourSquares);
console.log(fourSquares.length);

// blocks turning white
var blink = function(square) {
  $(square).addClass('flash');
  setTimeout(function() {
    $(square).removeClass('flash');
  }, 200);
};


// making block blink seperately (and random?)
var blinkArray = function() {
    var blinkOrder = []
    for (var i = 0; i < 4; i++){
      var randomNumber = Math.floor(Math.random()*4)
      blinkOrder.push(randomNumber)
    }

  var counter = 0;

  function clearTimerId(){
    clearInterval(timerID)
  }

  var timerID = setInterval(function() {
    blink(arr[blinkOrder[counter]]);
    counter++;
    if(counter > 3){
      clearTimerId()
    }
  }, 800);


// console.log(randomNumber)
    //return timerID;
  };




// var compPlay = function() {
//   var record = [];
//     timerID.push.record();
//     return
// }
































//)}
