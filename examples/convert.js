// http://en.wikipedia.org/wiki/Hexadecimal#Converting_from_other_bases
function toHex(d) {
  var r = d % 16;
  var result;
  if (d-r == 0)
    result = toChar(r);
  else
    result = toHex( (d-r)/16 ) + toChar(r);
  return result;
  }
}

function toChar(n) {
  const alpha = "0123456789ABCDEF";
  return alpha.charAt(n);
}

toHex(234); // EA


// Convert from Hex to RGB
function hexToRGB (r, g, b) {
  var r = parseInt(r, 16);
  var g = parseInt(g, 16);
  var b = parseInt(b, 16);
  return r + ' ' + g + ' ' + b;
}
hexToRGB('cc', 'dd', 'ff') // 204 221 255

// Convert from RGB to Hex
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
// << is the bitwise left shift operator
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
rgbToHex(243, 145, 98);