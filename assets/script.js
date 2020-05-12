$(document).ready(function() {

var fiveDayForecast = "api.openweathermap.org/data/2.5/forecast?q=";

var searchCity = ["Minneapolis","Austin", "Chicago", "New York", "Orlando", "San Franciso"];
var lon = "longitude";
var lat = "latidtude";

// function to display searchCity arrays
searchCity.forEach(function (city, index, originalArr) {
    returnCity(city);

    if (index === originalArr.length - 1) {
        displayWeatherInfo(city);
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

    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial";

    //start of call
    $.ajax({
        url: queryURL, 
        method: "GET"
    // store 
    }).then(function (response){
        console.log(queryURL);
        console.log(response);

        // $("#temperature").text("Temperature (K) " + response.main.temp);
        // $("#humidity")..text("Humidity: " + response.main.humidity);
        // $("#wind-speed").text("Wind Speed: " + response.wind.speed);
        
       
    })

}

// function to create buttons on city names to return weather information
function returnCity(city) {
    var button = $("<button>");
    button.addClass("city-btn btn btn-default").css("display", "block");
    button.attr("data-name", city);
    button.text(city);
    $(".search-city-array").append(button);
}

// Listerner on search button
$("#search-button").on("click", function (event) {
    event.preventDefault();

    // create new variable on search input
    var $weather = $("#search-input").val().trim();

    // update the search history
    searchCity.push($weather);
    localStorage.setItem("weather", JSON.stringify(searchCity))
    
    // call functions
    returnCity($weather);
    displayWeatherInfo($weather);

});
})