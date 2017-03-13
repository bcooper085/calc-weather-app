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
