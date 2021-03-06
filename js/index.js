/*
 * Digital root of 9 calulator
 * copyright (c) 2013 Karl Oskar Engdahl
 * MIT License
 */

var o = $
o.domReady(function() {
  o("#x").focus();
  o("#x").on('keyup', function() {
    var x = o('#x').html(), 
        nine = new BigNumber(9), 
        y = nine.multiply(x), 
        v = digitalRoot(y);

    if (+y) {
      o('#result').html('= <span class="r">'+ y +'</span>');
    } else {
      o('#result').html('');
    }
      
    if (v.subSum != 9 && v.subSum != 0) {
      o('#a').html(v.subSum +' = <span class="r">'+ v.result +'</span>');
    } else {
      o('#a, #b, #c').html('');
    }

    if (v.result >= 18) {
      var b = digitalRoot(v.result);
      o('#b').html(b.subSum +' = <span class="r">'+ b.result +'</span>');
      if (b.result >= 18) {
        var c =  digitalRoot(b.result);
        o('#c').html(c.subSum +' = <span class="r">'+ c.result +'</span>');
      } else {
        o('#c').html('');
      }
    } else {
      o('#b').html('');
    }

  });  
});

function digitalRoot(X) {
  var x = new String(X), r = { subSum: '', result: 0 }
  for (var i = 0;  i < x.length; i++) {
    if (x[i] !== '.') {
      r.result += +x[i];
      r.subSum += x[i] + '+'
    }         
  }
  r.subSum = r.subSum.slice(0,-1);
  return r
}