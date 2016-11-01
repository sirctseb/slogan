// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  var backgroundurls = [
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-1.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-2.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-3.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-4.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-4.png',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-5.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-6.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-7.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-8.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-9.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-10.png',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-11.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-12.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-13.jpg',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-14.png',
    'https://cdn.hyperdev.com/a68f6f68-288a-4966-bde7-5abf8116270e%2Fout-15.png'
  ];
  var font_families = [
    'Times, "Times New Roman", Georgia, serif',
    'Georgia, Verdana, Arial, Helvetica, sans-serif',
    '"Lucida Console", Courier, monospace',
    'cursive',
    'fantasy'
  ];
  
  var randomFromArray = function(array) {
    return array[Math.floor(Math.random()*array.length)];
  };
  
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
      $('.sloganroot').addClass('rendered')
      .css('font-family', randomFromArray(font_families));
      $('.backgroundfade').css('background-image', 'url(' + randomFromArray(backgroundurls) + ')')
    }
  }).focus(function(event) {
    $('.sloganroot').removeClass('rendered').css('font-family', '');
  });
});
