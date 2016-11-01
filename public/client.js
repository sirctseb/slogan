// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $('.sloganword').blur(function (event) {
    if (!document.querySelector('.sloganword:empty')) {
      $('.sloganroot').addClass('rendered');
    }
  }).focus(function(event) {
    $('.sloganroot').removeClass('rendered');
  });

});
