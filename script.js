  const apikey = "8263fc8b1445ae3c32e65e385e491857";
            const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const weatherIcon = document.querySelector(".weather-icon");


            /*async is an abreviation of asynchronous meaning not synchronous the async is saying that multiple operations are performing at once.*/
            
            async function checkWeather(city) {
                const response = await fetch(apiurl + city + `&appid=${apikey}`);

                /* if am writing this on my own not waiting for an online response, it will be const response = city then i will represent a json format an object data type for the city.
                all this boils down to data because we state multiple await so the final one below which is json have been asigned to data.
                */

                // the 404 is just stating an invalid city name
                /* from my understanding status ensures the city name. */
                
                if (response.status == 404) {
                    document.querySelector(".error").style.display = "block";
                    document.querySelector(".weather").style.display = "none";
                } else {

                    /*In the act of doing it manually, data is simply the country let me say i can represent it like this instead of data  i write cameroon. All of this response and json have been boild down to data so the fact is it is only structured in this way to give all the object data of a country in regards to weather this why by doing it manually, will just go ahead and say data = country.*/
                    var data = await response.json(); 

                    /* So when the awaited response is fully loaded, it comes on a json format (JavaScript Object Notation) which is the object data type.*/
                    /* "NOTE"
                    Never forget that when on equal sign is used, like stating a variable, it is simply saying that all that is on the right hand side is simply represented by either 3,4 or more letter word on the other hand the left hand side. */

                    /* The json which is stated above, is data format which is simply represented in the format of object data type as on the last section of this page below. */

                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                    if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "assets/images/clouds.png";
                    }
                    else if (data.weather[0].main == "Clear") {
                        weatherIcon.src = "assets/images/clear.png";
                    }
                    else if (data.weather[0].main == "Rain") {
                        weatherIcon.src = "assets/images/rain.png";
                    }
                    else if (data.weather[0].main == "Drizzle") {
                        weatherIcon.src = "assets/images/drizzle.png";
                    }
                    else if (data.weather[0].main == "Mist") {
                        weatherIcon.src = "assets/images/mist.png";
                    }

                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";

                    console.log(data);
                }
            }

            searchBtn.addEventListener("click", () => {
                checkWeather(searchBox.value);
            })

            /*.value states that when the click is carried out let the data be displayed in their various locations as stated above that is why when no value is stated, it will return undefiened.*/


            /*
            the "data" below have been inputed by me.
         "response" = "country" = "country.json" = "data":  {
    "coord": {
        "lon": 12,
        "lat": 6
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 21.31,
        "feels_like": 20.25,
        "temp_min": 21.31,
        "temp_max": 21.31,
        "pressure": 1012,
        "humidity": 29,
        "sea_level": 1012,
        "grnd_level": 910
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.66,
        "deg": 44,
        "gust": 1.7
    },
    "clouds": {
        "all": 64
    },
    "dt": 1707705937,
    "sys": {
        "country": "CM",
        "sunrise": 1707715730,
        "sunset": 1707758628
    },
    "timezone": 3600,
    "id": 2233387,
    "name": "Cameroon",
    "cod": 200
}
             */