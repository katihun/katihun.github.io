$(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 10;
    var radiusGrowthRate = 2;
    document.getElementById("txtr").value = radius;


    function draw() {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        radius += radiusGrowthRate;
    }
    function remove() {
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("txtr2").value = radius;
        document.getElementById("txtr3").value = radiusGrowthRate;
    }

    var r = setInterval(draw, 250);
    $("#canvas").click(function () {
        clearInterval(r);
        remove();
    });

    $("#btn").click(function(){
        r = setInterval(draw, 250);
    });


});