





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
  // for (var i = 0; i < arr.length; i++){
  //   // Math.random.delay(3000, ((blink(arr[i]), 1700)));
  //   Math.floor( Math.random( blink(arr[i]) + 4 ) );
  // }
  var counter = 0;
  var timerID = setInterval(function() {
    blink(arr[counter]);
    counter++;
  }, 200);

  if(counter === 4) {
    return timerID;
  }

};

// DOM and node association
$('.blocks').each(function(index, element) {

});
































//)}
