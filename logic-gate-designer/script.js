// var c = document.getElementById("scene");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// for (i = 0; i < 2; i++){
//     ctx.moveTo(i,i);
//     ctx.lineTo(i*20, i);
//     ctx.lineTo(i, i*20)
// }

// ctx.stroke();
/////////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
    $(".movable").draggable();
});





var gates = []



function AddNOT(){
    $("#scene").append('<div id="not3" class="movable ui-draggable ui-draggable-handle" style="position: relative;"><img src="not.png"></div>');

}
 
function AddAND(){
    $("#scene").append('<img src="and.png" alt">');
}

function AddNAND(){
    $("#scene").append('<img src="nand.png" alt">');
}

function AddOR(){
    $("#scene").append('<img src="or.png" alt">');
}

function AddNOR(){
    $("#scene").append('<img src="nor.png" alt">');
}

function AddXOR(){
    $("#scene").append('<img src="xor.png" alt">');
}

function AddXNOR(){
    $("#scene").append('<img src="xnor.png" alt">');
}

