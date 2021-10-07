console.log("hello")
var searchBtn = document.getElementById("searchBtn")
var RememberMe = document.getElementById("searchHistoryList")
var tempSpace = document.getElementById("temp")
var windSpace = document.getElementById("wind")
var humidSpace = document.getElementById("humidity")
var uvSpace = document.getElementById("uv")



var cityList = []
function callCity (){
    var constMe = document.getElementById("exampleFormControlTextarea1");
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+constMe.value+"&units=standard&appid=dd896623669fb986e67b89582e431e10";
    fetch(requestUrl)
    .then(response => response.json())
    .then( data => {
        console.log(data)
    tempSpace.innerText ="Temperature:" + data.main.temp
    windSpace.innerText = "Wind Speed:" +data.wind.speed
    humidSpace.innerText = "Humidity:" + data.main.humidity 
    var listStuff = document.createElement("button")
    listStuff.innerText= constMe.value
    RememberMe.append(listStuff)
    

    })
.catch( err => {
    alert("not a valid city")
    console.log(err)

})};
searchBtn.addEventListener('click', callCity);
    
// function storeThis() {
//     cityList= constME
//     RememberMe.append(constME);
//     localStorage.setItem("city", constME);
//     };