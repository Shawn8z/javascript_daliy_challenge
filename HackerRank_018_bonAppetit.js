function bonAppetit(bill, k, b) {
    // Write your code here
    let touchedFood = bill.filter((item, index) => index !== k);
    let actualBill = touchedFood.reduce((pVal, cVal) => pVal + cVal, 0) / 2;
    
    if (actualBill === b) {
        console.log ("Bon Appetit");
    } else {
        console.log (b - actualBill);
    }
}


let itemIndex = 1;
let totalItems = [3, 10, 2, 9];
let billed = 7;

let val = bonAppetit(totalItems, itemIndex, billed);
console.log(val);