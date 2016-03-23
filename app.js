





$('#start').on('click', function(){
      $('#container').removeClass('visible').addClass('hidden');
      $('.gameboard').removeClass('hidden').addClass('visible');
      $('#container').hide();

});

var playerSequence = [];
var compSequence = [];
// .join to turn them into strings

var getSequence = 0

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
      storedNum = blinkOrder.push(randomNumber)
    }

  var counter = 0;

  function clearTimerId(){
    clearInterval(timerID)
  }
  var timerID = setInterval(function() {
    blink(arr[blinkOrder[counter]]);
    counter++;
    if(counter > 3){
      var returned = [];
      returned.push(blinkOrder);
      console.log(returned)
      clearTimerId();
    }
  }, 800);
 var storedNum = 0;

// console.log(randomNumber)
    //return timerID;




// squares clicked and pushed to playerSequence

 $( "#block1" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block1').addClass('flash');
  setTimeout(function() {
    $('#block1').removeClass('flash');
  }, 200);
  playerSequence.push('1');
});
 $( "#block2" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block2').addClass('flash');
  setTimeout(function() {
    $('#block2').removeClass('flash');
  }, 200);
  playerSequence.push('2');
});
 $( "#block3" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block3').addClass('flash');
  setTimeout(function() {
    $('#block3').removeClass('flash');
  }, 200);
  playerSequence.push('3');
});
 $( "#block4" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block4').addClass('flash');
  setTimeout(function() {
    $('#block4').removeClass('flash');
  }, 200);
  playerSequence.push('4');
});


};




// var compPlay = function() {
//   var record = [];
//     timerID.push.record();
//     return
// }
































//)}
