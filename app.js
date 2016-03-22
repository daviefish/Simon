





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
var blink = function() {
  $('.blocks').addClass('flash');
  setTimeout(function() {
    $('.blocks').removeClass('flash');
  }, 500)
}

// making block blink seperately (and random?)
var blinkArray = function() {
  for (var i = 0; i < fourSquares.length; i++);

}

// DOM and node association
$('.blocks').each(function(index, element) {

})
































//)}
