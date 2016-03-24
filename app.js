





$('#start').on('click', function(){
      $('#container').removeClass('visible').addClass('hidden');
      $('.gameboard').removeClass('hidden').addClass('visible');
      $('#container').hide();

});

var playerSequence = [];
var compSequence = [];
// .join to turn them into strings

var getSequence = 0;
var storedNum = [];

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
  var blinkOrder = [];
    for (var i = 0; i < 4; i++){
      var randomNumber = Math.floor(Math.random()*4);
      blinkOrder.push(randomNumber);
      storedNum.push(blinkOrder);
    }

  var counter = 0;

  function clearTimerId(){
    clearInterval(timerID);
  }
  var timerID = setInterval(function() {
    blink(arr[blinkOrder[counter]]);
    counter++;
    if(counter > 3){
      var returned = [];
      returned.push(blinkOrder);
      console.log(returned);
      clearTimerId();
    }
  }, 800);


// console.log(randomNumber)
    //return timerID;




// squares clicked and pushed to playerSequence

$( "#block1" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block1').addClass('flash');
  playerSequence.push(1);
  setTimeout(function() {
    $('#block1').removeClass('flash');
  }, 200);
});

 $( "#block2" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block2').addClass('flash');
  playerSequence.push(2);
  setTimeout(function() {
    $('#block2').removeClass('flash');
  }, 200);
});

 $( "#block3" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block3').addClass('flash');
  playerSequence.push(3);
  setTimeout(function() {
    $('#block3').removeClass('flash');
  }, 200);
});

 $( "#block4" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block4').addClass('flash');
  playerSequence.push(4);
  setTimeout(function() {
    $('#block4').removeClass('flash');
  }, 200);
});
console.log(playerSequence);



};
console.log(playerSequence);
console.log(storedNum);

var checkWinner = function() {

if (playerSequence === storedNum) {
  return "true";
} else {
  return "false";
}
this.checkWinner();
};




// var compPlay = function() {
//   var record = [];
//     timerID.push.record();
//     return
// }
































//)}
