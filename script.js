console.log("hello")
var searchBtn = document.getElementById("searchBtn")
var RememberMe = document.getElementById("searchHistoryList")
var tempSpace = document.getElementById("temp")
var windSpace = document.getElementById("wind")
var humidSpace = document.getElementById("humidity")
var uvSpace = document.getElementById("uv")
var date1 = document.getElementById("date1")
var icon1 = document.getElementById("icon1")
var temp1 = document.getElementById("temp1")
var wind1 = document.getElementById("wind1")
var humidity1 = document.getElementById("humidity1")
var date2 = document.getElementById("date2")
var icon2 = document.getElementById("icon2")
var temp2 = document.getElementById("temp2")
var wind2 = document.getElementById("wind2")
var humidity2 = document.getElementById("humidity2")
var date3 = document.getElementById("date3")
var icon3 = document.getElementById("icon3")
var temp3 = document.getElementById("temp3")
var wind3 = document.getElementById("wind3")
var humidity3 = document.getElementById("humidity3")
var date4 = document.getElementById("date4")
var icon4 = document.getElementById("icon4")
var temp4 = document.getElementById("temp4")
var wind4 = document.getElementById("wind4")
var humidity4 = document.getElementById("humidity4")
var date5 = document.getElementById("date5")
var icon5 = document.getElementById("icon5")
var temp5 = document.getElementById("temp5")
var wind5 = document.getElementById("wind5")
var humidity5 = document.getElementById("humidity5")
var addStuff = document.createElement("p")
var headerFill = document.getElementById("cityName")
var cityList = []
function callCity (){
    var constMe = document.getElementById("exampleFormControlTextarea1");
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+constMe.value+"&units=standard&appid=dd896623669fb986e67b89582e431e10";
    fetch(requestUrl)
    .then(response => response.json())
    .then( data => {
        console.log(data)
        var iconCode = data.weather[0].icon;
        var iconCodeScript= "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
        headerFill.innerHTML= data.name;
        var iconic = document.getElementById("Iconic")
        var iconicCall= iconic.setAttribute("src", iconCodeScript)
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

})
var requestUrl2 = "http://api.openweathermap.org/data/2.5/forecast?q="+ constMe.value + "&appid=dd896623669fb986e67b89582e431e10"

fetch(requestUrl2)
    .then(response => response.json())
    .then( data => {
        console.log(data);
    for(let i=0; i<4; i++){
        // date1.innerText(moment().format("MMM Do YY");)
        // icon1.innerText(data.list[i].main.temp)
        temp1.innerText=data.list[0].main.temp
        wind1.innerText=data.list[0].wind.speed
        humidity1.innerText=data.list[0].main.humidity
        // date2.innerText=moment=.format="MMM Do YY";
        // icon2.innerText=data.list[i]
        temp2.innerText=data.list[1].main.temp
        wind2.innerText=data.list[1].wind.speed
        humidity2.innerText=data.list[1].main.humidity
        // date3.innerText=data.list[i]
        // icon3.innerText=data.list[i]
        temp3.innerText=data.list[2].main.temp
        wind3.innerText=data.list[2].wind.speed
        humidity3.innerText=data.list[2].main.humidity
        // date4.innerText=data.list[i]
        // icon4.innerText=data.list[i]
        temp4.innerText=data.list[3].main.temp
        wind4.innerText=data.list[3].wind.speed
        humidity4.innerText=data.list[3].main.humidity
        // date5.innerText=data.list[i]
        // icon5.innerText=data.list[i]
        temp5.innerText=data.list[4].main.temp
        wind5.innerText=data.list[4].wind.speed
        humidity5.innerText=data.list[4].main.humidity
    }
        
    

    })};
searchBtn.addEventListener('click', callCity);
    
// function storeThis() {
//     cityList= constME
//     RememberMe.append(constME);
//     localStorage.setItem("city", constME);
//     };