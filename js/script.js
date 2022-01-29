var priceMastodon = 60;
var priceRussianCircles = 45;
var priceTidesFromNebula = 30;
var priceKingGizzard = 55;
var priceTheeOhSees = 40;
var priceSlift = 25;
var priceGraveyard = 65;
var priceMonsterMagnet = 45;
var priceBlackMountain = 30;

console.log(`The price is ${priceMastodon} €`);
console.log(`The price is ${priceRussianCircles} €`);
console.log(`The price is ${priceTidesFromNebula} €`);
console.log(`The price is ${priceKingGizzard} €`);
console.log(`The price is ${priceTheeOhSees} €`);
console.log(`The price is ${priceSlift} €`);
console.log(`The price is ${priceGraveyard} €`);
console.log(`The price is ${priceMonsterMagnet} €`);
console.log(`The price is ${priceBlackMountain} €`);

function calculateInvoice(bandStage1, bandStage2, bandStage3) {
    var sum = bandStage1 + bandStage2 + bandStage3;
    return sum;
}

function studentInvoice(bandStage1, bandStage2, bandStage3) {
    var discountSum = calculateInvoice(bandStage1, bandStage2, bandStage3) * 0.9;
    return discountSum;
}

function invoiceText(price) {
    var price = price;
    var text = `You have spent ${price} € on Festival Tickets!`
    return text;
}

console.log(invoiceText(calculateInvoice(priceMastodon, priceKingGizzard, priceGraveyard)));
console.log(invoiceText(calculateInvoice(priceRussianCircles, priceSlift, priceBlackMountain)));
console.log(invoiceText(calculateInvoice(priceTidesFromNebula, priceTheeOhSees, priceMonsterMagnet)));



console.log(invoiceText(studentInvoice(priceMastodon, priceKingGizzard, priceGraveyard)));
console.log(invoiceText(studentInvoice(priceRussianCircles, priceSlift, priceBlackMountain)));
console.log(invoiceText(studentInvoice(priceTidesFromNebula, priceTheeOhSees, priceMonsterMagnet)));