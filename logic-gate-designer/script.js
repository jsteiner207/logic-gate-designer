var c = document.getElementById("scene");
var ctx = c.getContext("2d");
ctx.beginPath();
for (i = 0; i < 2; i++){
    ctx.moveTo(i,i);
    ctx.lineTo(i*20, i);
    ctx.lineTo(i, i*20)
}

ctx.stroke();

