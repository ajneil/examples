function fadeIn () {
  // opacity change
}
function slideFromCenter () {

}
function getSteps(angle) {
  var cos = Math.cos(angle),
      sin = Math.sin(angle);

  return {
    x: cos -sin,
    y: sin + cos
  }
}

function nextStep() {

}