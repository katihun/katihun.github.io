/*function draw(){
    function init(){
        var canvas = document.getElementsByTagName('canvas');
        var c = canvas.getContext('2d');
        c.fillRect(0,0,myCanvas.width, myCanvas.height);
        var radius = 1;
        var color = 0;

        function drawCircle(){
            c.fillStyle = 'hsl(' + color++ + ', 100%, 50%';
            c.beginPath();  
            c.arc(500,500,radius, 0, 2*Math.PI,false);
            c.fill();
            radius +=0.5;
            if(radiua < 500){
                requestAnimationFrame(drawCircle);
            }
        }
        drawCircle();
    }
    window.addEventListener('load',init,false);
}*/

function draw() {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function cleardrawing() {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}