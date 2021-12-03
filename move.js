 
window.onload = function() { GetObj() };

GetObj = () => {
    obj = document.getElementById("object");
    obj.style.left = "0px";
    obj.style.top = "700px";
}

class Move {
    left = () => {
        obj.style.left = parseInt(obj.style.left) - 10 + "px";
    }
    up = () => {
        obj.style.top = parseInt(obj.style.top) - 10 + "px";
    }
    right = () => {
        obj.style.left = parseInt(obj.style.left) + 10 + "px";
    }
    down = () => {
        obj.style.top = parseInt(obj.style.top) + 10 + "px";
    }

    jumpUp = () => {        
        setTimeout(function() {  
            obj.style.top = parseInt(obj.style.top) - 2 + "px";
            i++;
            if (i < 25) {
                move_obj.jumpUp();
            }
        }, 10)
        if(i == 24){
            i = 0;
            this.jumpDown();
        }
    }

    jumpDown = () => {
        console.log(i+"movedi");
        setTimeout(function() {
            obj.style.top = parseInt(obj.style.top) + 5 + "px";
            i++;
            if (i < 25) {
                move_obj.jumpDown();
            }
        }, 10)
    }
}

var i = 1;  
var obj = null;
var sender = null;
var move_obj = new Move();

GetKeyAndMove = (e) => {

    var move_obj = new Move();
    var key = e.which || e.keyCode;

    switch (key) {
        case 37: 
            move_obj.left();
            break;
        case 38:
            move_obj.up();
            break;
        case 39:
            move_obj.right();
            break;
        case 40:
            move_obj.down();
            break;
        case 32:
            i = 0;
            move_obj.jumpUp()
            console.log(i);

    }
    
}