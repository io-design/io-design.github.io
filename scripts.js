$(document).ready( function() {
   
  $('#home').click( function() {
    moveMe(0);
  });

  $('#about').click( function() {
    moveMe(1);
  });

  $('#myresume').click( function() {
    moveMe(2);
  });

  $('#contact').click( function() {
    moveMe(3);
  });

  $('#hireMe').click( function() {
    moveMe(3);
  });

  $('#code').click( function() {
    moveMe(0);
  });


  function moveMe(i) {
    if (i == 0) {
      $('#home').addClass('selected');
      $('#about').removeClass('selected');
      $('#myresume').removeClass('selected');
      $('#contact').removeClass('selected');
      $('.home-page-pos').animate({left: "0%"}, 400);
      $('.out-my-1').animate({left: "0%"}, 400);
      $('.out-my-2').animate({left: "0%"}, 400);
      $('.out-my-3').animate({left: "0%"}, 400);
    } else if (i == 1) {
      $('#home').removeClass('selected');
      $('#about').addClass('selected');
      $('#myresume').removeClass('selected');
      $('#contact').removeClass('selected');
      $('.home-page-pos').animate({left: "-100%"}, 400);
      $('.out-my-1').animate({left: "-100%"}, 400);
      $('.out-my-2').animate({left: "-100%"}, 400);
      $('.out-my-3').animate({left: "-100%"}, 400);
    } else if (i == 2) {
      $('#home').removeClass('selected');
      $('#about').removeClass('selected');
      $('#myresume').addClass('selected');
      $('#contact').removeClass('selected');
      $('.home-page-pos').animate({left: "-200%"}, 400);
      $('.out-my-1').animate({left: "-200%"}, 400);
      $('.out-my-2').animate({left: "-200%"}, 400);
      $('.out-my-3').animate({left: "-200%"}, 400);
    } else if (i == 3) {
      $('#home').removeClass('selected');
      $('#about').removeClass('selected');
      $('#myresume').removeClass('selected');
      $('#contact').addClass('selected');
      $('.home-page-pos').animate({left: "-300%"}, 400);
      $('.out-my-1').animate({left: "-300%"}, 400);
      $('.out-my-2').animate({left: "-300%"}, 400);
      $('.out-my-3').animate({left: "-300%"}, 400);
    } else {};
  }

});
