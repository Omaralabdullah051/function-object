var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    proccessor: 'intel i5'
};
console.log(computer);
// Get a object property value 
console.log(computer.proccessor);
var computerPrice = computer.price;
console.log(computerPrice);

// set a object property valule 
computer.price = 22000;
console.log(computer);

// different ways to set a value of an object property 
var priceProperty = "price";
computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;

var storageProperty = "storage";
computer[storageProperty] = '512gb';
computer["storage"] = '1tb';
computer.storage = '5tb';
console.log(computer);


//  we can also get object property values by this type of different ways 