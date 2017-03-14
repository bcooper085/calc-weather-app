(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e13ed3f222b484e5edf55992566b3ca8";

},{}],2:[function(require,module,exports){
function Calculator(){

}

Calculator.prototype.add = function(number1, number2){
  return number1 + number2;
};

Calculator.prototype.subtract = function(number1, number2){
	return number1 - number2;
};

Calculator.prototype.multiply = function(number1, number2){
	return number1 * number2;
};

Calculator.prototype.divide = function(number1, number2){
	return number1 / number2;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.getWeather = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    console.log(response.main.humidity);
    return response.main.humidity;
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
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

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var humidity = currentWeatherObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");
    console.log(humidity);
  });
});

},{"./../js/calculator.js":2,"./../js/weather.js":3}]},{},[4]);
