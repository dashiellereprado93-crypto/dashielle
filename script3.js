body{

margin:0;
min-height:100vh;

font-family:'Montserrat',sans-serif;
font-weight:bold;

background-image:url('webpage_background.png');
background-size:cover;
background-position:center;
background-attachment:fixed;

overflow-x:hidden;

}

/* Star particles */

.particles{

position:fixed;
width:100%;
height:100%;

pointer-events:none;

background-image:
radial-gradient(white 2px, transparent 2px);

background-size:80px 80px;

opacity:0.35;

animation:moveStars 40s linear infinite;

}

@keyframes moveStars{

from{transform:translateY(0);}
to{transform:translateY(-500px);}

}

/* Title */

h1{

text-align:center;
color:#3d285d;

margin-top:20px;

text-shadow:
0 0 10px #e7c3fc,
0 0 25px #e7c3fc;

animation:titleFloat 5s ease-in-out infinite;

}

/* Divider */

hr{

border:4px solid #9273c2;

margin:15px auto;

width:90%;

box-shadow:0 0 15px #e7c3fc;

}

/* Section heading */

.paksaheading{

text-align:center;

color:#3d285d;

border:2px solid #654989;

background:rgba(255,255,255,0.25);

backdrop-filter:blur(12px);

padding:10px;

margin:10px auto;

width:70%;

border-radius:12px;

box-shadow:
0 0 20px #e7c3fc;

}

/* Card layout */

.cards{

display:flex;

flex-wrap:wrap;

justify-content:center;

gap:25px;

padding:30px;

}

/* Card container */

.card-container{

width:45%;

height:300px;

perspective:1000px;

}

/* Card */

.card{

width:100%;
height:100%;

position:relative;

transform-style:preserve-3d;

transition:transform 0.8s;

animation:cardAppear 1s ease forwards;

}

/* Flip animation */

.card-container:hover .card{

transform:rotateY(180deg);

}

/* Card sides */

.card-front,
.card-back{

position:absolute;

width:100%;
height:100%;

backface-visibility:hidden;

border-radius:18px;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

padding:20px;

box-sizing:border-box;

}

/* Front */

.card-front{

background:rgba(177,148,223,0.4);

backdrop-filter:blur(10px);

border:2px solid #e7c3fc;

color:#5f1c94;

box-shadow:
0 0 15px #e7c3fc,
0 10px 40px rgba(0,0,0,0.3);

position:relative;

overflow:hidden;

}

/* Hover glow */

.card-container:hover .card-front{

box-shadow:
0 0 30px #e7c3fc,
0 0 60px #e7c3fc;

}

/* Shimmer effect */

.card-front::after{

content:"";

position:absolute;

top:0;
left:-100%;

width:100%;
height:100%;

background:linear-gradient(
120deg,
transparent,
rgba(255,255,255,0.6),
transparent
);

transition:0.6s;

}

.card-container:hover .card-front::after{

left:100%;

}

/* Back */

.card-back{

background:rgba(231,195,252,0.8);

color:#5f1c94;

transform:rotateY(180deg);

border:2px solid #e7c3fc;

box-shadow:
0 0 15px #e7c3fc;

overflow:auto;

text-align:center;

}

/* Images */

.card-back img{

max-width:40%;

border-radius:10px;

border:4px solid #654989;

margin-bottom:10px;

}

/* Card title */

.card-text h3{

margin:0;

color:#3d285d;

}

/* Card animation */

@keyframes cardAppear{

from{

opacity:0;
transform:translateY(40px);

}

to{

opacity:1;
transform:translateY(0);

}

}

/* Floating title */

@keyframes titleFloat{

0%{transform:translateY(0);}
50%{transform:translateY(-6px);}
100%{transform:translateY(0);}

}

/* Ripple animation */

@keyframes ripple{

to{

transform:scale(10);
opacity:0;

}

}