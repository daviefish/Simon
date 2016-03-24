var playerSequence = [];
var blinkOrder = [];

//make array out of gameboard pieces
var fourSquares = $('.gameboard').children();
var arr = $.makeArray(fourSquares);


// blocks turning white
var blink = function(square) {
  $(square).addClass('flash');
  setTimeout(function() {
    $(square).removeClass('flash');
  }, 200);
};

var newRound = function() {
  // TODO this might be pushing in more than we need
  for (var i = 0; i < blinkArray.length; i++){
    blinkOrder.push( Math.floor( Math.random() * 4) );
  }
}

// making block blink seperately (and random?)
var blinkArray = function() {
  for (var i = 0; i < 4; i++) {
    blinkOrder.push( Math.floor( Math.random() * 4) );
  }

  var counter = 0;

  function clearTimerId() {
    clearInterval(timerID);
  }

  var timerID = setInterval(function() {
    blink(arr[blinkOrder[counter]]);
    counter++;
    if(counter > 3) {
      var returned = [];
      returned.push(blinkOrder);
      console.log(returned[0]);
      clearTimerId();
    }
  }, 800);
}

var checkWinner = function() {
  // console.log(playerSequence);
  // console.log(blinkOrder);
  if (playerSequence.join() === blinkOrder.join()) {
    return true;
  } else {
    return false;
  }
};


$('#start').on('click', function(){
  $('#container').removeClass('visible').addClass('hidden');
  $('.gameboard').removeClass('hidden').addClass('visible');
  $('#container').hide();
  window.alert('ready');
  blinkArray();
});

// squares clicked and pushed to playerSequence

$( "#block1" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block1').addClass('flash');
  playerSequence.push(0);
  setTimeout(function() {
    $('#block1').removeClass('flash');
  }, 200);
});

$( "#block2" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block2').addClass('flash');
  playerSequence.push(1);
  setTimeout(function() {
    $('#block2').removeClass('flash');
  }, 200);
});

$( "#block3" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block3').addClass('flash');
  playerSequence.push(2);
  setTimeout(function() {
    $('#block3').removeClass('flash');
  }, 200);
});

$( "#block4" ).mousedown(function() {
  // alert( "Handler for .mousedown() called." );
  $('#block4').addClass('flash');
  playerSequence.push(3);
  setTimeout(function() {
    $('#block4').removeClass('flash');
  }, 200);
});
