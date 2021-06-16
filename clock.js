const clock = document.querySelector('h2#clock');

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5555555500);
setTimeout(sayHello,5000);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${Minutes}:${seconds}`);    
//date().get---
}
getClock()
setInterval(getClock,1000);

"1".padStart(2,'0');
"hello".padEnd(20,"x");
