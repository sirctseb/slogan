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

  // http://stackoverflow.com/questions/11128130/select-text-in-javascript
  function selectText(element) {
    var doc = document;
    var text = element;
    var range;

    if (doc.body.createTextRange) { // ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  }

  $('.sloganword').keypress(function(e) {
    if (e.which === 13) {
      e.preventDefault();
      var _this = $(this);
      if (_this.hasClass('first')) {
        $('.second').focus();
      } else if(_this.hasClass('second')) {
        $('.third').focus();
      } else {
        // Workaround for webkit's bug
        // http://jsfiddle.net/mareksuscak/oytdoxy8/
        window.getSelection().removeAllRanges();
        _this.blur();
      }
    }
  });

  $('.sloganword').blur(function (event) {
    // trim whitespace and periods
    var _this = $(this);
    _this.text(_this.text().replace(/(^[\s.,]*)|([\s.,]*$)/g, ''));
    renderIfFull();
  }).focus(function(event) {
    selectText(this);
    $('.sloganroot').removeClass('rendered').css('font-family', '');
  });

  var renderIfFull = function() {
      if (!document.querySelector('.sloganword:empty')) {
        $('.sloganroot').addClass('rendered')
        .css('font-family', randomFromArray(font_families));
        $('.backgroundfade').css('background-image', 'url(' + randomFromArray(backgroundurls) + ')');
      }
  };

  renderIfFull();
});
