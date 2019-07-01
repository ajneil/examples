function buildPoints(total) {
  var array = [];
  while(i < total) {
    var x = randomNumber('x');
    var y = randomNumber('y');
    var delay = randomNumber('delay');
    var size = 4;
    var opacity = 0;
    // calculate angle from 0,0 / 550, 350
    var hypotenuse = calculateHypotenuse(x, y);
    var angle = calculateAngle(x, y, hypotenuse);
    array.push({x, y, size, delay, opacity, angle});
    i++;
  }
  return array;
}

function calculateAngle(x, y, hypotenuse) {
  var sinX = x / hypotenuse;
  var asin = Math.asin(sinX)
  console.log('sinX', sinX);
  console.log('asin', asin);
  return asin;
}

function calculateHypotenuse (oppositeSize, adjacentSize) {
  return Math.sqrt(Math.pow(oppositeSize, 2) + Math.pow(adjacentSize, 2));
}