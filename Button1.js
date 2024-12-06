function changeColor() {
  dd1=document.getElementById("d1");
  dd2=document.getElementById("d2");
  
  dd1.className = "GreenL";
  dd2.className = "Khaki";
}

function doPink() {
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor = "LightGreen";
  
  var canvas = document.getElementById("d2");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, canvas.width, canvas.height);
  //canvas.style.backgroundColor = "Khaki";
}

function doAqua() {
  var dd1 = document.getElementById("d2");
  dd1.style.backgroundColor = "Khaki";
  
  var ctx = dd1.getContext("2d");
  ctx.fillStyle="Brown";
  ctx.fillRect(10,10,60,60);
  ctx.fillRect(80,10,75,75);
  ctx.fillRect(165,10,90,90);
  
  ctx.fillStyle = "DarkSlateGray";
  ctx.font = "30px Arial";
  ctx.fillText("beaute", 20,135);
}