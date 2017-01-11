setInterval(function() {
  var eles = document.getElementsByName('ft');
  for (var i = 0; i < eles.length; i++) {
    eles[i].style.color = getRandomColor();
  }
}, 500 ); //set an interval timer up to repeat the function

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
