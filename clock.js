const clock = document.querySelector('h2#clock');

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5555555500);
setTimeout(sayHello,5000);

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);    
//date().get---
}
getClock()
setInterval(getClock,1000);
console.log(typeof Date().getHours());
