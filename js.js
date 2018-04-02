var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;

canvas.height = h; //y
canvas.width = w; //x

var rect = {w: 100, h: 100};

c.strokeRect((w/2) - rect.w/2, (h/2) - rect.h/2, rect.w, rect.h);

var line = {w:2, h:100};
var top_starting_path = (h/2)-50;
var bottom_starting_path = (h/2)+50;

for (var i = 0; i < 10; i++) {
  c.beginPath();
  c.moveTo((w/2), top_starting_path);
  c.lineTo((w/2), top_starting_path - line.h);
  c.stroke();
}
