$(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 10;

    function draw() {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        radius += 1;
        if (radius < 200) {
            requestAnimationFrame(draw);
        }
    }
    draw();
});