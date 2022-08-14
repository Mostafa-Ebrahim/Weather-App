// Api doc: https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q=Cairo&units=metric&appid=73bff582adc5e4a03568f4847cf1ecf9


let weather = {
    "apiKey": "73bff582adc5e4a03568f4847cf1ecf9",
    fetchWeather: function (city) {
        document.getElementById('home').style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?' + city + '")';

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then(response => response.json())
            .then(data => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.querySelector(".city").innerText = "Weather now in " + name;
        document.querySelector(".temp").innerText = temp.toPrecision(2) + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weather").classList.remove("loading");
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
});
