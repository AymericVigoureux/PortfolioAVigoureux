$(document).ready(function() {
  var lines = 10;
  var textLength = 300;

  for (i = 0; i < lines - 1; i++) {
    $(".contact-num").first().clone().insertAfter($(".contact-num").first());
  }


  setInterval(function() {
    $(".contact-num").each(function() {
      if ($(this).text().length < textLength) {
        $(this).text(($(this).text() + Math.round(Math.random())));
      } else {
        $(this).text(Math.round(Math.random()) + $(this).text().substring(0, $(this).text().length - 1))
      }
    });

  }, 35);

});