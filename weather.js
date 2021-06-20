function onGeoOk(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weahter---`

fetech(url)
.then((response) => response.json())
.then((data) => {
    const weather = document.querySelector("#weather span: first-child");
    const city = document.querySelector("#weather span: last-child");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;

})



}
function onGeoErr(){
 alert("We can not find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)