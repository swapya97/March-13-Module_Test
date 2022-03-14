var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var named = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity")
var speed = document.querySelector(".speed")
var degree = document.querySelector(".degree")
button.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data =>
    {
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        var humidityValue = data["main"]["humidity"]
        var speedValue = data["wind"]["speed"]
        var degreeValue = data["wind"]["deg"]
        named.innerHTML =nameValue;
        temp.innerHTML =tempValue;
        desc.innerHTML =descValue;
        humidity.innerHTML = humidityValue;
        speed.innerHTML = speedValue;
        degree.innerHTML = degreeValue;
    } )

.catch (err => alert("wrong city name !")) 
})

