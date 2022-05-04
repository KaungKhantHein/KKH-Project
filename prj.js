let weather = {
    "apikey" : "ea7e557eee62e3ab4f5c42005583f3b4",

   
    fetchWeather: function (city) {
        
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&unit=matric&appid=" + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));   
        
    },
    displayWeather : function (data) {  
        const {name} = data; 
        const { icon, description } = data.weather[0];  
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        const { pressure } = data.main;
        console.log(name, icon, description, temp, humidity, speed, pressure);
        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "K";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".pressure").innerText = "Air Pressure: " + pressure + "mb";
    }
}