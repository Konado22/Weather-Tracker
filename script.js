console.log("hello")
var searchBtn = document.getElementById("searchBtn")
var RememberMe = document.querySelector("ul")
var tempSpace = document.getElementById("temp")
var windSpace = document.getElementById("wind")
var humidSpace = document.getElementById("humidity")
var uvSpace = document.getElementById("uv")




function callCity (){
    var constMe = document.getElementById("exampleFormControlTextarea1");
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+constMe.value+"&appid=dd896623669fb986e67b89582e431e10";
    fetch(requestUrl)
    .then(response => response.json())
    .then( data => {
        console.log(data)
    tempSpace.innerText = data['main']['temp']
    windSpace.innerText = data.wind.speed
    humidSpace.innerText = data.main.humidity 
    })
.catch( err => {
    console.log(err)

})};
searchBtn.addEventListener('click', callCity);
