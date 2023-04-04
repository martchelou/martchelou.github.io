// Snake Game
window.onload = () => {
    // base board
    let stage = document.getElementById('stage');
    let ctx = stage.getContext('2d');
    document.addEventListener('keydown', keyPush);
    setInterval(game, 120);
    const spped = 1;
    var vx, vy, px, py, size, qt, ax, ay, trail, tail;
    vx = 0;
    vy = 0;
    px = 10;
    py = 15;
    size = 20;
    qt = 20;
    ax = 15;
    ay = 15;
    trail = [];
    tail = 5;
    function game () {
        px += vx;
        py += vy;
        if (px < 0) {
            px = qt-1;
        }
        if (px > qt-1) {
            px = 0;
        }
        if (py < 0) {
            py = qt-1;
        }
        if (py > qt-1) {
            py = 0;
        }
        // paint stage
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0,0, stage.width, stage.height);
        // apple
        ctx.fillStyle = 'black';
        ctx.fillRect(ax*size, ay*size, size, size);
        // snake
        ctx.fillStyle = 'grey';
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(
                trail[i].x*size, 
                trail[i].y*size, 
                size-1,
                size-1
            );
            if (
                trail[i].x == px &&
                trail[i].y == py 
            ) {
                vx = 0;
                vy = 0;
                tail = 5;
            }            
            if (
                trail[i].x == px &&
                trail[i].y == py
            ) {
                vx = 0;
                vy = 0;
                tail = 5;
            }
        } // endfor
        trail.push({
            x:px,
            y:py
        });
        while (trail.length > tail) {
             trail.shift();
        } // endwhile
        if (
            ax == px &&
            ay == py
        ) {
            tail++;
            ax = Math.floor(Math.random()*qt);
            ay = Math.floor(Math.random()*qt);
        }
    } // end game()
    function keyPush(event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 37: // left
                vx = -spped;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -spped;
                break;
            case 39: // right
                vx = spped;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = spped;
                break;            
            default:
                console.error('Use only arrow key to turn the snake');
                alert('Use only arrow key to turn the snake');
                break;
        }
    }
}