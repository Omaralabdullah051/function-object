// simple addition result 
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);

// simple multiplication result 
function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

// simple subtraction result 
function subtractTwoNumbers(num1, num2) {
    console.log('First Number:', num1);
    console.log('Second Number:', num2);
    var subtraction = num1 - num2;
    return subtraction;
}
var firstNumber = 189;
var secondNumber = 244;
var subtractValue = subtractTwoNumbers(secondNumber, firstNumber);
console.log('The subtraction result is:', subtractValue);

// simple division result 
function division(num1, num2) {
    console.log(num1, num2);
    var divide = num1 / num2;
    return divide;
}
var divisionValue = division(24, 4);
console.log('The division result is:', divisionValue);
