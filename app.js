var playerSequence = [];
var blinkOrder = [];

var checkLengths = function(){
if (playerSequence.length === blinkOrder.length) {
  checkWinner();
}

}
//make array out of gameboard pieces
var fourSquares = $('.blocks');
var blockList = $.makeArray(fourSquares);

// blocks turning white
var blink = function(square) {
  $(square).addClass('flash');
  setTimeout(function() {
    $(square).removeClass('flash');
  }, 200);
};

var newRound = function() {
  var randomNumber = Math.floor( Math.random() * 4)
  blinkOrder.push( randomNumber );
  blinkArray();
  nextTurn();
}

// making block blink seperately (and random?)
var blinkArray = function() {
 var counter = 0;

  // function clearTimerId() {
  //   clearInterval(timerID);
  // }

  var timerID = setInterval(function() {
    var indexOfSquareToBlink = blinkOrder[counter];
    blink(blockList[indexOfSquareToBlink]);
    counter++;
    if ( counter > blinkOrder.length){
      clearInterval(timerID);
    }
  }, 800);
  //
}

var checkWinner = function() {
  // console.log(playerSequence);
  // console.log(blinkOrder);
  if (playerSequence.join() === blinkOrder.join()) {
    playerSequence = [];
    alert('correct');
    newRound();
  } else {
    alert('WRONG!');
    playerSequence = [];
    $('#container').show();
    $('#container').addClass('visible');
  }
};


$('#start').on('click', function(){
  $('#container').removeClass('visible').addClass('hidden');
  $('.gameboard').removeClass('hidden').addClass('visible');
  $('#container').hide();
  newRound()
  window.alert('ready');
  blinkArray();
});

var nextTurn = function() {
  $('.blocks').on('click', function() {
    checkLengths();
  });
}




// squares clicked and pushed to playerSequence

$( "#block0" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  document.querySelector("#beep2").play();
  playerSequence.push(0);
  blink( $( "#block0" ) );
});

$( "#block1" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  document.querySelector("#beep6").play();
  blink( $( "#block1" ) );
  playerSequence.push(1);

});

$( "#block2" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  document.querySelector("#beep7").play();
  blink( $( "#block2" ) );
  playerSequence.push(2);

});

$( "#block3" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  document.querySelector("#beep10").play();
  blink( $( "#block3" ) );
  playerSequence.push(3);
});
