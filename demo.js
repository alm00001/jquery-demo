
function init(){

  //////////////////////////////////////////
// Add the “selected” class to the first element of the menú
$('#menu li:first').addClass('selected');

// Add the “middle” class to the middle articles in the <section> tags
$('article:nth-child(2)').addClass('middle');

// Add the “highlighted” class to the .list-item even elements
$('.list-item:odd').addClass('highlighted');

// Add a “1px solid #eee” border to the last .list-item element
$('article:nth-child(2)').addClass('middle');

// In the form, change the border color of the focused input
$('.list-item:last').css('border','1px solid #eee');

// In the form, change the border color of the focused input
$('.container input:first').css('border-color', 'red')

// $('input').bind('focus', function(){ // entering
//     $(this).addClass('focus');
// });
// $('input').bind('blur', function(){ // exiting
//   $(this).removeClass('focus');
// });

/////////////////////////////////////////////
};

$(document).ready(init);
