var skyColor = 'white';

var phones = ['iphone', 'xiomi', 'samsung', 'lg', 'htc'];
phones[3] = 'oppo';

// check an element not exists in an array 
if (phones.indexOf('oppo') == -1) {
    console.log('opps!amir khan is missing');
}

// check an element exists in an array 
if (phones.indexOf('lg') != -1) {
    console.log('lg is available now');
}
// loop 
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (var i = 0; i < phones.length; i++) {
    console.log(phones[i]);
}

// function 
function addThreeNumbers(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}
var addition = addThreeNumbers(87, 41, 56);
console.log(addition);

// object 
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
}

function addTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var result = num1 + num2;
    return result;
}
var addition = addTwoNumbers(20, 25);
console.log(addition);


function multiplyTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var result = number1 * number2;
    return result;
}
console.log(multiplyTwoNumbers(55, 30));

// division, tofixed, parseFloat combined in function 
function divisionTwoNumbers(number1, number2) {
    console.log('The two numbers are', number1, number2);
    return number1 / number2;
}
var result = (divisionTwoNumbers(34, 55));
console.log('The division result is', parseFloat(result.toFixed(1)));

// subtration 
function subtractTwoNumbers(num1, num2) {
    console.log('The two numbers is:', num1, num2);
    return num1 - num2;
}
console.log('The subtraction result is:', subtractTwoNumbers(23, 19));

var computer = {
    color: 'silver',
    storage: '256gb',
    displaySize: '15px',
    company: 'apple'
}
console.log(computer);
computer.storage = '512gb';
computer['storage'] = '1tb';
var storageAddition = 'storage';
computer[storageAddition] = '5tb';
console.log(computer);
console.log(computer.storage);

var color = 'yellow';
if (color == 'red') {
    console.log('color is red');
}
else if (color == 'blue') {
    console.log('color is blue');
}
else if (color == 'orange') {
    console.log('color is orange');
}
else if (color == 'white') {
    console.log('color is white');
}
else if (color == 'skyBlue') {
    console.log('color is skyblue');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    console.log('color is black');
}

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'orange':
        console.log('color is orange');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'skyblue':
        console.log('color is skyblue');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}

var i = 0;
while (i < 8) {
    console.log(i);
    i++;
}
for (var i = 0; i < 8; i++) {
    console.log(i);
}

var subjects = ['english', 'bangla', 'math', 'science', 'physics', 'chemistry', 'higher math'];
var i = 0;
while (i < subjects.length) {
    if (i == 4) {
        break;
    }
    console.log(subjects[i]);
    i++;
}

for (var i = 0; i < subjects.length; i++) {
    if (i == 4) {
        break;
    }
    console.log(subjects[i]);
}
for (var i = 0; i < subjects.length; i++) {
    if (i == 3) {
        continue;
    }
    console.log(subjects[i]);
}
