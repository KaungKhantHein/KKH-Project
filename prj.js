let weather = {
    "apikey" : "ea7e557eee62e3ab4f5c42005583f3b4",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&unit=matric&appid=" + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    },
}