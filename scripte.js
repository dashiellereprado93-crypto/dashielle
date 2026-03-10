const sparkleContainer = document.getElementById("sparkles");

function createSparkle(){

const sparkle = document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.style.left = Math.random()*100 + "vw";
sparkle.style.top = "100vh";
sparkle.style.animationDuration = (Math.random()*3+3) + "s";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},6000);

}

setInterval(createSparkle,200);