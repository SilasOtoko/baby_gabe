var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay
$('body').append($overlay);

//capture click event
$('#gallery a').click(function(){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  $image.attr("src", imageLocation);
  $overlay.show();

  var $captionText = $(this).children("img").attr("alt");
  $caption.text($captionText);
});

$overlay.click(function(){
  $overlay.hide();
});