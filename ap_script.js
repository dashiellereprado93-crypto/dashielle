const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {

block.addEventListener("click", function(e){

let circle = document.createElement("span");

circle.style.position="absolute";
circle.style.width="20px";
circle.style.height="20px";
circle.style.background="rgba(231,195,252,0.8)";
circle.style.borderRadius="50%";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";
circle.style.transform="scale(0)";
circle.style.animation="ripple 0.6s linear";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});