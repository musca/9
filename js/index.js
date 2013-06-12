/*
 * Digital root of 9 calulator
 * copyright (c) 2013 Karl Oskar Engdahl
 * MIT License
 */

var o = $
o(window).addListener('load', function() {
  o("input").on('keyup', function() {
    var x = o('#x').val(), 
        nine = new BigNumber(9), 
        y = nine.multiply(x), 
        v = digitalRoot(y);
    if (y > 0) {
      o('#result').html(' = ' + y);
      o('#a').html(v.subSum +'= <span class="r">'+ v.result +'</span>');
      if (y == 9) {
        o('#a').html('');
      }
      if (v.result >= 18) {
        var b = digitalRoot(v.result);
        o('#b').html(b.subSum +'= <span class="r">'+ b.result +'</span>');
        if (b.result >= 18) {
          var c =  digitalRoot(b.result);
           o('#c').html(c.subSum +'= <span class="r">'+ c.result +'</span>');
        } else {
          o('#c').html('');
        }
      } else {
        o('#b').html('');
      }
    } else {
      o('#result, #a, #b, #c').html('');
    }
  });  
});

function digitalRoot(X) {
  var x = new String(X), r = { subSum: "", result: 0 }
  for (var i = 0;  i < x.length; i++) {
    if (x[i] !== ".") {
      r.result += +x[i];
      r.subSum += x[i] + '+'
    }         
  }
  r.subSum = r.subSum.slice(0,-1);
  return r
}