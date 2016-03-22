





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
  }, 500)
}

// making block blink seperately (and random?)
var blinkArray = function() {
  for (var i = 0; i < arr.length; i++){
    Math.random((blink(arr[i]), 1700))
  }
}

// DOM and node association
$('.blocks').each(function(index, element) {

})
































//)}
