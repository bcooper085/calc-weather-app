var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#add-form').submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($('#first-number').val());
    var number2 = parseInt($('#second-number').val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.add(number1, number2);
    $("#addSolution").text(output);

});

$('#subtract-form').submit(function(event) {
  event.preventDefault();

  var number1 = parseInt($('#first-numberS').val());
  var number2 = parseInt($('#second-numberS').val());
  var simpleCalculator = new Calculator();
  var output = simpleCalculator.subtract(number1, number2);
  $("#subtractSolution").text(output);

});

$('#division-form').submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($('#first-numberD').val());
  var number2 = parseInt($('#second-numberD').val());
  var simpleCalculator = new Calculator();
  var output = simpleCalculator.divide(number1, number2);
  $('#divisionSolution').text(output);

});

$('#multiply-form').submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($('#first-numberM').val());
  var number2 = parseInt($('#second-numberM').val());
  var simpleCalculator = new Calculator();
  var output = simpleCalculator.multiply(number1, number2);
  $('#multiplySolution').text(output);

});

});

$(document).ready(function() {
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  currentWeatherObject,getWeather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response) {
         $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      })

      .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
   });
});
