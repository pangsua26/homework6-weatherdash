$(document).ready(function() {

   var searchCity = ["Minneapolis","Austin", "Chicago", "New York", "Orlando"];
      
    // function to display searchCity arrays
    searchCity.forEach(function (city, index, originalArr) {
        returnCity(city);
    
        if (index === originalArr.length - 1) {
            // displayWeatherInfo(city);
        }
        // console.log(city);
    })
    
        // function to add current day to city name container
        var currentDay = moment().format("dddd MMMM Do");
        $("#city-name").text(currentDay);
        // console.log(currentDay);   
    
    
    // function to display city weather information
    function displayWeatherInfo(city) {
    
        var apiKey = "31be87001622c83535cd8f39b27eb25b";
    
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
       
        //start of call
        $.ajax({
            url: queryURL, 
            method: "GET"
        // store 
        }).then(function (response){
            // console.log(queryURL);
            // console.log(response);
            
            $("#city-name").text(response.name) + currentDay;
            $("#temperature").text("Temperature (K) " + response.main.temp);
            $("#humidity").text("Humidity: " + response.main.humidity);
            $("#wind-speed").text("Wind Speed: " + response.wind.speed);
          
            uvIndex(response.coord.lon,response.coord.lat);

            var lon = response.coord.lon;
            var lat = response.coord.lat; 
            // uvIndex(lat,lon);
            fiveDayForecast(lon,lat);
        
        })
    }
    
    // function to call longitude and latitude
    function uvIndex(lon, lat) {
        var apiKey = "31be87001622c83535cd8f39b27eb25b";
        var queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid="+ apiKey + "&lat="+ lat + "&lon=" + lon;
        // console.log(queryURL);
    
        $.ajax({
            url: queryURL, 
            method: "GET"
        // store 
        }).then(function (response){
            // console.log(queryURL);
            // console.log(response);
           
            $("#uv-index").text("UV Index: " + response[0].value);      
            
        })
    }
    
    function fiveDayForecast(lon, lat) {
       
        var fiveDayQuery = "https://api.openweathermap.org/data/2.5/forecast?cnt=40&units=imperial&lat=" + lat + "&lon=" + lon +"&APPID=31be87001622c83535cd8f39b27eb25b"

        $.ajax({
            url: fiveDayQuery,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);
            console.log(fiveDayQuery);
            var forecastWeather = $("#forecast-weather");
            forecastWeather.empty();

            for (var i = 0; i < response.list.length; i++) {
            
                var time = response.list[i].dt_txt.indexOf("12:00:00");

                if (time !== -1) {
                    console.log(time);
                    console.log(response.list[i])

                    var dateTime = new Date(response.list[i].dt_txt).toLocaleDateString();
                    var weatherIcon = $("<img>");
                    var cardBody = $("<div>").addClass("card-body");
                    var cardTemp = $("<p>").addClass("card-text");
                    var cardHumid = $("<p>").addClass("card-text");
                    var cardClass = $("<div>").addClass("card");
                    var cardTitle = $("<p>").addClass("card-title");
                    cardTitle.text(dateTime);
                    
                    weatherIcon.attr("src", "http://openweathermap.org/img/wn/"+ response.list[i].weather[0].icon + ".png");
                    cardTemp.text("Temp: " + response.list[i].main.temp);
                    cardHumid.text("Humidity: " + response.list[i].main.humidity);
                    cardBody.addClass("bg-primary");
                    cardBody.append(cardTitle);
                    cardBody.append(cardTemp);
                    cardBody.append(cardHumid);
                    cardBody.append(weatherIcon);
                    cardClass.append(cardBody);

                  
                    
                }
                forecastWeather.append(cardClass);
            }

            
        
           
            
        });
    }



    // function to create buttons on city names to return weather information
    function returnCity(city) {
        var button = $("<button>");
        button.addClass("city-btn btn btn-default").css("display", "block");
        button.attr("data-name", city);
        button.attr("value", city);
        button.text(city);
        $(".search-city-array").append(button);
    }
    
    $(".search-city-array").on("click", ".city-btn", function() {
        var buttonVal = $(this).val().trim();
        console.log(buttonVal);
        displayWeatherInfo(buttonVal);
    
    })
    
    
    // Listerner on search button
    $("#search-button").on("click", function (event) {
        event.preventDefault();
    
        // create new variable on search input
        var $weather = $("#search-input").val().trim();
        console.log($weather);
    
        // update the search history
        searchCity.push($weather);
        localStorage.setItem("weather", JSON.stringify(searchCity))
        
        // call functions
        returnCity($weather);
        displayWeatherInfo($weather);
    
    });
})