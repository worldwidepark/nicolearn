const title = document.getElementById('h1');
title.innerHTML = 'HI!';


function handleTitleClick(){
    title.style.color = 'blue';
}

function handleMouseEnter(){
  title.innerHTML="stop"
}

function handleMouseLeasve(){
    title.innerHTML="h1"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; 
}
// there are three head, title, body can come back of document.

function handleCopy(){
    alert("copier")
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("GOOD");
}


title.addEventListener('click',handleTitleClick);
// title.onclick();

title.addEventListener('mouseenter',handleMouseEnter);
title.addEventListener('mouseleave',handleMouseLeasve);


window.addEventListener("resize",handleWindowResize);
window.addEventListener('copy',handleCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);