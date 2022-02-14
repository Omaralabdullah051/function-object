var i = 0;
// if we want to take i=5 , we need to use console upper than if 
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
// if we want to take i=9, we need to use console upper than if 
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i > 8) {
        break;
    }
}
// if we don't want to take 98 , we need use if upper than console 
// or if we want to 98, we need to use console upper than if 
var numbers = [54, 35, 21, 78, 98, 23, 101, 45, 67];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 90) {
        break;
    }
    console.log(numbers[i]);
}

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 90) {
        continue;
    }
    console.log(numbers[i]);
}
