1.// variable 
var favoriteBook = '4 hour work week';
2.// array 
var booklist = ['positioning', 'hooked', 'start with why', 'shoe dog'];
console.log(booklist.indexOf('shoe dog'));
booklist[1] = 'story brand';
booklist.push('small giants');
booklist.pop();
3.// conditionals 
if (booklist[1] == 'hokked') {
    console.log('I am hokked');
}
else {
    console.log('I am not hokked');
}
// 4.loop 
// while loop 
var i = 0;
while (i < 7) {
    console.log(i);
    i++;
}
// for loop 
for (var i = 0; i < 7; i++) {
    console.log(i);
}