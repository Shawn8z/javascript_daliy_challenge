function taumBday(b, w, bc, wc, z) {
    // Write your code here

    if (bc > wc) {
        if (wc + z < bc) {
            bc = wc + z;
        }
    } else {
        if (bc + z < wc) {
            wc = bc + z;
        }
    }

    let bCost = b * bc;
    let wCost = w * wc;

    let total = bCost + wCost;
    
    return total;
}



let test1 = [10, 10, 1, 1, 1];
let test2 = [5, 9, 2, 3, 4];
let test3 = [3, 6, 9, 1, 1];
let test4 = [7, 7, 4, 2, 1];
let test5 = [3, 3, 1, 9, 2];
let test6 = []

let val = taumBday(...test4);
console.log(val);