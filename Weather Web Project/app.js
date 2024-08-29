let inputvalue = document.querySelector("#cityinput");
let btn = document.querySelector("#add"); // Corrected: using # to select the ID
let city = document.querySelector("#cityoutput");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let apik = "9609545a9d645688e216f1fd7fd9af73";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
    try {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue.value + "&appid=" + apik)
            .then(res => res.json())
            .then(data => {
                let nameval = data["name"];
                let descrip = data["weather"][0]["description"];
                let temperature = data["main"]["temp"];
                let wndspeed = data["wind"]["speed"];

                city.innerHTML = `Weather of <span>${nameval}</span>`;
                temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
                description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
                wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
            })
            .catch(err => {
                alert("You entered the wrong city name");
            });
    } catch (err) {
        alert("An error occurred");
    }
});
