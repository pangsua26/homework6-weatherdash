

var fiveDayForecast = "api.openweathermap.org/data/2.5/forecast?q=";
var uvAPI = "http://api.openweathermap.org/data/2.5/uvi?lat=";
var searchCity = ["Minneapolis","Austin", "Chicago", "New York", "Orlando", "San Franciso"];
var lon = "longitude";
var lat = "latidtude";

searchCity.forEach(function (city, index, originalArr) {
    returnCity(city);

    if (index === originalArr.length - 1) {
        displayWeatherInfo(city);
    }
    console.log(city);
})

$(document).ready(function() {
    // function to add current day to city name container
    var currentDay = moment().format("dddd MMMM Do");
    $("#city-name").text(currentDay);
    // console.log(currentDay);      
})

function displayWeatherInfo(city) {
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    $.ajax({url: queryURL, method: "GET"})
    .then(function (response){
        
    })



}

function returnCity(city) {
    var button = $("<button>");
    button.addClass("city-btn btn btn-default").css("display", "block");
    button.attr("data-name", city);
    button.text(city);
    $(".search-city-array").append(button);
}

$("#search-button").on("click", function (event) {
    event.preventDefault();

    var $weather = $("#search-input").val().trim();

    cities.push($weather);
    localStorage.setItem("weather", JSON.stringify(cities))
    
    returnCity($weather);
    displayWeatherInfo($weather);

});