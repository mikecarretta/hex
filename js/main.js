(function () {
  // html messages
  var startAlert = "Type a Hex color, do not include the #."
  var successAlert = "Hex Value is Correct";
  var dangerAlert = "Hex Value is Not Correct. Type six digits that range from 1 - 9 and a - f."; // regColorcode alert
  // html message classes
  var aS = "alert-success";
  var aD = "alert-danger";

  // message function with three options
  function messages (a, b, c) {
    return $('.alert').html(a).removeClass(b).addClass(c);
  }

  function swatch (val) {
    return $('<div class="hex-color" style="background-color: #'
            + val.toLowerCase()
            + ';"><p class="hex-info">#'
            + val.toLowerCase()
            + '</p></div>');
  }

  // Input Field functionality
  $('#hex-value').on('keyup', function(){
    var hexVal = $('#hex-value').val();
    var hexLength = hexVal.length;

    //http://networking.mydesigntool.com/viewtopic.php?tid=415&id=31
    var regColorcode  = /^([0-9a-fA-F]{6})?$/;

    messages(startAlert, aD, aS);

    if (regColorcode.test(hexVal) === false || hexVal.length === 0) {
      messages(dangerAlert, aS, aD);

    } else {
      messages(successAlert, aD, aS);

      var color = swatch(hexVal);

      $('#colors').prepend(color);

    }

  }); // end #hex-value

  $('.random').on('click', function () {
      // http://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
      function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
          result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
      }
      // base sixteen numbers and letters, 6 digits length
      var rString = randomString(6, '0123456789abcdef');

      $('#hex-value').val(rString);

      var color = swatch(rString);

      $('#colors').prepend(color);
    });

  $('.reset').on('click', function () {
      $('#colors').html('');
      $('#hex-value').val('');
      messages(startAlert, aS);
  });

// Additional References
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
})();