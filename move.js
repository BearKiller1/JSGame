 
window.onload = function() { GetObj() };

GetObj = () => {
    // Ground
    ground = document.getElementById("ground");
    ground_img = document.getElementById("ground_img");
    ground_img.style.top = "750px";

    //  Character
    obj = document.getElementById("object");
    obj.style.left = "0px";
    obj.style.top = "650px";
    obj.style.transform = "scaleX(1)";

    // Wall
    wall = document.getElementById("walls");
    wall.style.cssText = "position: absolute; width: 50px; height: 100px; top:650px; left: 200px; background-image: url('https://media.istockphoto.com/photos/grey-stones-texture-picture-id1164803980?k=20&m=1164803980&s=612x612&w=0&h=AGaz616SB3brh08zEgXbH0ujoZ8d--rzPEQ4L8teUno=')";

    checkers();

}

checkers = () => {
    
    setInterval(() => {
        if(parseInt(ground_img.style.top) - parseInt(obj.style.top) <= 100){
            obj.style.top = "650px";
        }
    }, 10);
}


class Move {
    left = () => {
        console.log(obj.style.top + wall.style.top);
        if(parseInt(wall.style.left) <= parseInt(obj.style.left) - 40 || parseInt(obj.style.left) < 200 || (obj.style.top + 80) < wall.style.top ){
            obj.style.left = parseInt(obj.style.left) - 10 + "px";
        }
        obj.style.transform = "scaleX(-1)";
    }

    up = () => {
        obj.style.top = parseInt(obj.style.top) - 10 + "px";
    }

    right = () => {
        console.log(obj.style.top + wall.style.top);
        // console.log("wall position -> " + wall.style.left + "|| obj position ->" + obj.style.left);
        if(parseInt(wall.style.left) != parseInt(obj.style.left) + 80 || (obj.style.top - 80) < wall.style.top ){
            obj.style.left = parseInt(obj.style.left) + 10 + "px";
            obj.style.transform = "scaleX(1)";
        }
    }

    down = () => {
        if(parseInt(ground_img.style.top) - parseInt(obj.style.top) <= 100){
            obj.style.top = "650px";
        }
        else{
            obj.style.top = parseInt(obj.style.top) + 10 + "px";
        }
    }

    jumpUp = () => {        
        if(i == 24){
            i = 0;
            this.jumpDown();
        }
        else{
            if(parseInt(obj.style.top) > 525){
                setTimeout(function() {  
                    obj.style.top = parseInt(obj.style.top) - 5 + "px";
                    if( obj.style.transform === "scaleX(1)"){
                        obj.style.left = parseInt(obj.style.left) + 2 + "px";
                    }
                    else{
                        obj.style.left = parseInt(obj.style.left) - 2 + "px";
                    }
                    i++;
                    if (i < 25) {
                        move_obj.jumpUp();
                    }
                }, 10)
            }
            else{
                obj.style.top = "650px";
                this.jumpDown();
            }
        }

    }

    jumpDown = () => {
        setTimeout(function() {
            obj.style.top = parseInt(obj.style.top) + 5 + "px";

            if( obj.style.transform === "scaleX(1)"){
                obj.style.left = parseInt(obj.style.left) + 2 + "px";
            }
            else{
                obj.style.left = parseInt(obj.style.left) - 2 + "px";
            }

            i++;
            if (i < 24) {
                move_obj.jumpDown();
            }
        }, 10)
    }
}

var i = 0;  
var obj = null;
var wall = null;
var sender = null;
var ground = null;
var objTest = null;
var ground_img = null;
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
            break;
        case 82:
            GetObj();
    }
    
}

Reset = () => {
    GetObj();
}