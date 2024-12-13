jQuery(document).ready(function($) {
  var width = $(document).width();
  var $idAnimate = $('#animate');
  var isPaused = false; 

  function goRight() {
    if (!isPaused) {
      $idAnimate.animate({
        left: width
      }, 500, function() {
        setTimeout(goLeft, 50);
      });
    }
  }

  function goLeft() {
    if (!isPaused) {
      $idAnimate.animate({
        left: 0
      }, 500, function() {
        setTimeout(goRight, 50);
      });
    }
  }

  setTimeout(goRight, 50);

  var $document = $(document);
  $document.click(function() {
    if (isPaused) {
      isPaused = false; 
      goRight();
    } else {
      isPaused = true; 
      $idAnimate.stop(); 
    }
  });
});