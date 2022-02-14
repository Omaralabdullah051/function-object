// Function parameter and Function return 

function bringSingara(taka) {
    console.log('singara er jonne dise', taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log('Ai nen singara', singara);

// Function parameter and Function return s 
function bringSingara(taka) {
    console.log('singara er jonne taka dise', taka);
    console.log('mama singara den joldi.deri koren killiga');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 300;
var singara = bringSingara(money);
console.log('ei nen apnar singar.eibar bari jan', singara);