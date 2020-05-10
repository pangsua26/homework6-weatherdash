var APIKey = "e48e3b2c9156b8d1e78800b981022bbb";
var weatherAPI = "api.openweathermap.org/data/2.5/weather?"
var fiveDayForecast = "api.openweathermap.org/data/2.5/forecast?q=";
var uvAPI = "http://api.openweathermap.org/data/2.5/uvi?lat=";
var searchCity = ["Minneapolis","Austin", "Chicago", "New York", "Orlando", "San Franciso"];
var lon = "longitude";
var lat = "latidtude";

$(document).ready(function() {
    var currentDay = moment().format("dddd MMMM Do");
    $("#city-name").text(currentDay);
    console.log(currentDay);
})











