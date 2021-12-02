//init object globally
var objImage = null;


window.onload = init;

function init() {
    objImage = document.getElementById("image1");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
}


//var test = setInterval(move, 10);
document.getElementBy
function move() {
    var bounding = objImage.getBoundingClientRect();
    if(bounding.left > document.body.clientWidth - 150){
        objImage.style.left = "0px";
        objImage.style.top = "0px";
    }
    else{
        console.log(bounding.x);
        objImage.style.left = parseInt(objImage.style.left) + 3 + "px";
    }
}


function jump() {
    for (let i=0; i<50; i++) {
        up(i);
    }
       
     function up(i) {
       setTimeout(function() {
           objImage.style.top = parseInt(objImage.style.top) - 1 + "px";
           objImage.style.left = parseInt(objImage.style.left) + 1 + "px";
       }, 10 * i);
     }
     setTimeout(function() {
         down();
    }, 530);
}

function down() { 
    for (let i=0; i<50; i++) {
        up(i);
     }
       
     function up(i) {
       setTimeout(function() {
           objImage.style.top = parseInt(objImage.style.top) + 1 + "px";
           objImage.style.left = parseInt(objImage.style.left) + 1 + "px";
       }, 10 * i);
     }
}

function getKeyAndMove(e) {
    console.log(e);
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
        case 32:
            jump();
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 10 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 10 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 10 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 10 + "px";
}
