const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("click", function(e){

let circle = document.createElement("span");

circle.style.position="absolute";
circle.style.width="20px";
circle.style.height="20px";
circle.style.background="rgba(255,255,255,0.7)";
circle.style.borderRadius="50%";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";
circle.style.transform="scale(0)";
circle.style.animation="ripple 0.6s linear";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});