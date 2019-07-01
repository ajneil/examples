
var randomNumber = function(settingsOption){
  return Math.floor(Math.random() * settings[settingsOption] || 510);
};
var arrayOfdataPoints = [];
var i = 0;

function init() {
  arrayOfdataPoints = buildPoints(dataPoints);
  draw();
  setTimeout(function () {
    renderGraph();
  }, 2000)
}


function loop() {
  var x = i * step.x,
      y = i * step.y;

  ctx.fillRect(200 + x, 200 + y, 2, 2);
  i++;
}

