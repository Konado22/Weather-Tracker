console.log("hello");
var searchBtn = document.getElementById("searchBtn");
var RememberMe = document.getElementById("searchHistoryList");
var tempSpace = document.getElementById("temp");
var windSpace = document.getElementById("wind");
var humidSpace = document.getElementById("humidity");
var uvSpace = document.getElementById("uv");
var addStuff = document.createElement("p");
var headerFill = document.getElementById("cityName");
var cityList = [];
function getCityName (){
var cityTextArea =   document.getElementById("exampleFormControlTextarea1").value
console.log(cityTextArea)
callCity(cityTextArea);
}
function getCityNameBtn (){
  var cityBtnText =   this.value
  console.log(cityBtnText)
  callCity(cityBtnText);
  }
function callCity(city) {
  var constMe = city;
  console.log(constMe)
  var requestUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    constMe +
    "&units=standard&appid=dd896623669fb986e67b89582e431e10";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var iconCode = data.weather[0].icon;
      var iconCodeScript =
        "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      headerFill.innerHTML = data.name;
      var iconic = document.getElementById("Iconic");
      var iconicCall = iconic.setAttribute("src", iconCodeScript);
      tempSpace.innerText = "Temperature:" + data.main.temp;
      windSpace.innerText = "Wind Speed:" + data.wind.speed;
      humidSpace.innerText = "Humidity:" + data.main.humidity;
      var listStuff = document.createElement("button");
      listStuff.setAttribute("class", "followME");
      listStuff.addEventListener("click", getCityNameBtn);
      listStuff.innerText = constMe;
      RememberMe.append(listStuff);
    //   for (let i = 0; i < listStuff.length; i++)
    //     localStorage.setItem(i, listStuff);
    })
    .catch((err) => {
      alert("not a valid city");
      console.log(err);
    });
  var requestUrl2 =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    constMe +
    "&appid=dd896623669fb986e67b89582e431e10";

  fetch(requestUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < 5; i++) {
        console.log(i)
        var date = document.getElementById("date" + i );
      var icon = document.getElementById("icon" + i );
      var temp = document.getElementById("temp" + i );
      var wind = document.getElementById("wind" + i );
      var humidity = document.getElementById("humidity" + i );

        document.getElementById("iconInfo"+ i).innerText=data.list[i].weather[0].description;

        temp.innerText = data.list[i].main.temp;
        wind.innerText = data.list[i].wind.speed;
        humidity.innerText = data.list[i].main.humidity;
        // date3.innerText=data.list[i]
        icon.setAttribute(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[2].weather[0].icon +
            "@2x.png"
        );
      }
    });
}
searchBtn.addEventListener("click", getCityName);











// function sideCall(event) {
//   console.log(event.target.innerText);
//   var requestME =
//     "http://api.openweathermap.org/data/2.5/forecast?q=" +
//     event.target.innerText +
//     "&appid=dd896623669fb986e67b89582e431e10";
//   fetch(requestME)
//     .then((response) => response.json())
//     .then((data) => {
//       var iconCode = data.weather[0].icon
//       var iconCodeScript =
//         "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
//       headerFill.innerHTML = data.name;
//       var iconic = document.getElementById("Iconic");
//       var iconicCall = iconic.setAttribute("src", iconCodeScript);
//       tempSpace.innerText = "Temperature:" + data.main.temp;
//       windSpace.innerText = "Wind Speed:" + data.wind.speed;
//       humidSpace.innerText = "Humidity:" + data.main.humidity;
//       listStuff.innerText = constMe.value;
//       for (let i = 0; i < listStuff.length; i++)
//         var requestME2 =
//           "http://api.openweathermap.org/data/2.5/forecast?q=" +
//           event.target.innerText +
//           "&appid=dd896623669fb986e67b89582e431e10";
//     });

//   fetch(requestME2)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
      
//         // date1.innerText(moment().format("MMM Do YY");)
//         icon1.setAttribute(
//           "src",
//           "http://openweathermap.org/img/wn/" +
//             data.list[0].weather[0].icon +
//             "@2x.png"
//         );
//         document.getElementById("iconInfo1").innerText =
//           data.list[0].weather[0].description;
//         temp1.innerText = data.list[0].main.temp;
//         wind1.innerText = data.list[0].wind.speed;
//         humidity1.innerText = data.list[0].main.humidity;
//         // date2.innerText=moment=.format="MMM Do YY";
//         icon2.setAttribute(
//           "src",
//           "http://openweathermap.org/img/wn/" +
//             data.list[1].weather[0].icon +
//             "@2x.png"
//         );
//         document.getElementById("iconInfo2").innerText =
//           data.list[1].weather[0].description;
//         temp2.innerText = data.list[1].main.temp;
//         wind2.innerText = data.list[1].wind.speed;
//         humidity2.innerText = data.list[1].main.humidity;
//         // date3.innerText=data.list[i]
//         icon3.setAttribute(
//           "src",
//           "http://openweathermap.org/img/wn/" +
//             data.list[2].weather[0].icon +
//             "@2x.png"
//         );
//         document.getElementById("iconInfo3").innerText =
//           data.list[2].weather[0].description;
//         temp3.innerText = data.list[2].main.temp;
//         wind3.innerText = data.list[2].wind.speed;
//         humidity3.innerText = data.list[2].main.humidity;
//         // date4.innerText=data.list[i]
//         icon4.setAttribute(
//           "src",
//           "http://openweathermap.org/img/wn/" +
//             data.list[3].weather[0].icon +
//             "@2x.png"
//         );
//         document.getElementById("iconInfo4").innerText =
//           data.list[3].weather[0].description;
//         temp4.innerText = data.list[3].main.temp;
//         wind4.innerText = data.list[3].wind.speed;
//         humidity4.innerText = data.list[3].main.humidity;
//         // date5.innerText=data.list[i]
//         icon5.setAttribute(
//           "src",
//           "http://openweathermap.org/img/wn/" +
//             data.list[4].weather[0].icon +
//             "@2x.png"
//         );
//         document.getElementById("iconInfo5").innerText =
//           data.list[4].weather[0].description;
//         temp5.innerText = data.list[4].main.temp;
//         wind5.innerText = data.list[4].wind.speed;
//         humidity5.innerText = data.list[4].main.humidity;
//       }
//     )};