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
