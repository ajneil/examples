var canvas = document.getElementById('myChart');

function draw() {
  var now = new Date();
  var originallyRun = new Date(timestamp);

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1100, 700); // clear canvas

    for(var i = 0; i < arrayOfdataPoints.length; i++) {
      if (originallyRun.getSeconds() + arrayOfdataPoints[i].delay <= now.getSeconds()) {
        ctx.fillStyle = `rgba(30, 30, 30,${ arrayOfdataPoints[i].opacity += settings.opacity })`;
        ctx.beginPath();
        ctx.arc(arrayOfdataPoints[i].x, arrayOfdataPoints[i].y, arrayOfdataPoints[i].size, 0, 2 * Math.PI);
        if (now.getSeconds() > originallyRun.getSeconds() + 1)

        // which side of the fold?
        if (arrayOfdataPoints[i].y < 450) {
          arrayOfdataPoints[i].y = arrayOfdataPoints[i].y + 0.5;
        } else {
          arrayOfdataPoints[i].y = arrayOfdataPoints[i].y - 0.5;
        }
        ctx.fill();

        var theta = 4;
        var r = 0.1;

        // ctx.strokeStyle = 'blue';
        // ctx.moveTo(arrayOfdataPoints[i].x, arrayOfdataPoints[i].y)

        // var newX = arrayOfdataPoints[i].x + 120 * Math.cos(arrayOfdataPoints[i].angle);
        // var newY = arrayOfdataPoints[i].y + 120 * Math.sin(arrayOfdataPoints[i].angle);
        // ctx.lineTo(newX, newY);
        // ctx.stroke();

        // console.log('X', arrayOfdataPoints[i].x);
        // console.log('Y', arrayOfdataPoints[i].y);
        // console.log('newX', newX);
        // console.log('newY', newY);


        // ctx.moveTo(arrayOfdataPoints[i].x, arrayOfdataPoints[i].y)
        // ctx.strokeStyle = 'red';
        // ctx.lineTo(550, 350) // midway point
        // ctx.stroke();
      }
    }
  }

  if (originallyRun.getSeconds() + 3.5 > now.getSeconds()) {
    // console.log('tick');
    window.requestAnimationFrame(draw);
  }
}