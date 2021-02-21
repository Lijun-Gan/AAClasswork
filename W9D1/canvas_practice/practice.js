document.addEventListener("DOMContentLoaded", function(){
    const canvas =document.getElementById('mycanvas'); 
    canvas.height = 500;
    canvas.weight = 500;
    
    cts = canvas.getContext('2d');
    cts.fillStyle = "blue";
    cts.fillRect(0,0,500,500);

    cts.beginPath();
    cts.arc(50,50,10,0,2*Math.PI,true);
    cts.lineWidth = 30;
    cts.stroke();
    cts.fillStyle ="yellow";
    cts.fill();


});
