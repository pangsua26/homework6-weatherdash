var APIKey = "166a433c57516f51dfab1f7edaed8413";
var weatherAPI = "api.openweathermap.org/data/2.5/weather?"
var fiveDayForecast = "api.openweathermap.org/data/2.5/forecast?q=";
var uvAPI = "http://api.openweathermap.org/data/2.5/uvi?lat=";
var searchCity = ["Minneapolis","Austin", "Chicago", "New York", "Orlando", "San Franciso"];
var lon = "longitude";
var lat = "latidtude";

$(document).ready(function() {
    // function to add current day to city name container
    var currentDay = moment().format("dddd MMMM Do");
    $("#city-name").text(currentDay);
    // console.log(currentDay);
})









