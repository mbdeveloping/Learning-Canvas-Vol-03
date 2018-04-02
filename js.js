var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;

canvas.height = h; //y
canvas.width = w; //x

var rect = {w: 100, h: 100};

c.strokeRect((w/2) - rect.w/2, (h/2) - rect.h/2, rect.w, rect.h);

var line = {w:2, h:100};
var line_starting_point_x = (w/2-50);
var line_starting_point_y = (h/2)-50;
var bottom_starting_path = (h/2)+50;
var mrandom = Math.random()*100;

for (var i = 0; i < 9; i++) {
  c.beginPath();
  c.moveTo(line_starting_point_x, line_starting_point_y);
  c.lineTo(line_starting_point_x, line_starting_point_y - (Math.random() *50 +50));
  c.stroke();
  line_starting_point_x +=12.5;

}
