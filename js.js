var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;

canvas.height = h; //y
canvas.width = w; //x

var rect = {w: 100, h: 100};

c.strokeRect((w/2) - rect.w/2, (h/2) - rect.h/2, rect.w, rect.h);

var line_starting_point_x_top = (w/2-50);
var line_starting_point_y_top = (h/2)-50;
var line_starting_point_x_bot = (w/2)-50;
var line_starting_point_y_bot = (h/2)+50;
var line_starting_point_x_left = (w/2)-50;
var line_starting_point_y_left = (h/2)+50;
var line_starting_point_x_right = (w/2)+50;
var line_starting_point_y_right = (h/2)+50;

var point = {x:line_starting_point_x_top, y:line_starting_point_y_top};

// function animate() {
//   requestAnimationFrame(animate);
// drawLines()
// }
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

// animate();

function drawLines() {

  for (var i = 0; i < 9; i++) {
    c.beginPath();
    c.moveTo(line_starting_point_x_top, line_starting_point_y_top);
    c.lineTo(line_starting_point_x_top, line_starting_point_y_top - (Math.random() *100 +20));
    c.stroke();
    line_starting_point_x_top +=12.5;
  }



  //Bot lines
  for (var i = 0; i < 9; i++) {
    c.beginPath();
    c.strokeStyle = "red";
    c.moveTo(line_starting_point_x_bot, line_starting_point_y_bot);
    c.lineTo(line_starting_point_x_bot, line_starting_point_y_bot + (Math.random() *100 +20));
    c.stroke();
    line_starting_point_x_bot +=12.5;
  }

  //Left lines
  for (var i = 0; i < 9; i++) {
    c.beginPath();
    c.strokeStyle = "green";
    c.moveTo(line_starting_point_x_left, line_starting_point_y_left);
    c.lineTo(line_starting_point_x_left - (Math.random() *100 +20), line_starting_point_y_left);
    c.stroke();
    line_starting_point_y_left -=12.5;
  }

  //Right lines
  for (var i = 0; i < 9; i++) {
    c.beginPath();
    c.strokeStyle = "grey";
    c.moveTo(line_starting_point_x_right, line_starting_point_y_right);
    c.lineTo(line_starting_point_x_right + (Math.random() *100 +20), line_starting_point_y_right);
    c.stroke();
    line_starting_point_y_right -=12.5;
  }
}
drawLines();
