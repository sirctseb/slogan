// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $('.sloganword').keypress(function(e) {
    if (e.which === 13) {
      e.preventDefault();
      var _this = $(this);
      if (_this.hasClass('first')) {
        $('.second').focus();
      } else if(_this.hasClass('second')) {
        $('.third').focus();
      } else {
        _this.blur();
      }
    }
  });
  $('.sloganword').blur(function (event) {
    // trim whitespace and periods
    var _this = $(this);
    _this.text(_this.text().replace(/(^[\s.,]*)|([\s.,]*$)/g, ''));
    if (!document.querySelector('.sloganword:empty')) {
      $('.sloganroot').addClass('rendered');
    }
  }).focus(function(event) {
    $('.sloganroot').removeClass('rendered');
  });

});
