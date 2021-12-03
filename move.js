var obj = null;

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

    jump = () => {
        for (let i = 0; i < 10; i++) {
            setInterval( () => {
                obj.style.left = parseInt(obj.style.left) + 1 + "px";
                obj.style.top = parseInt(obj.style.top) - 1 + "px";
                return 0;
            }, 100);
        }
    }
}


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
            console.log(parseInt(obj.style.top));
            move_obj.jump();
    }
    
}