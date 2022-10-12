function taumBday(b, w, bc, wc, z) {
    // Write your code here

    // if (bc > wc) {
    //     if (wc + z < bc) {
    //         bc = wc + z;
    //     }
    // } else {
    //     if (bc + z < wc) {
    //         wc = bc + z;
    //     }
    // }

    // let bCost = b * bc;
    // let wCost = w * wc;
    // let total = bCost + wCost;
    

    // if (Number.MAX_SAFE_INTEGER < total) {
    //     let result = BigInt(total);
    //     console.log(BigInt.asIntN(64, result));
    // }

    // this is the bigInt apporach



    let bCount = BigInt(b);
    let wCount = BigInt(w);

    let bpCost = BigInt(bc);
    let wpCost = BigInt(wc);

    let converCost = BigInt(z);

    if (bpCost > wpCost) {
        if (wpCost + converCost < bpCost) {
            bpCost = wpCost + converCost;
        }
    } else {
        if (bpCost + converCost < wpCost) {
            wpCost = bpCost + converCost;
        }
    }

    let bCost = bCount * bpCost;
    let wCost = wCount * wpCost;
    let total = bCost + wCost;

    return total;
}



let test1 = [10, 10, 1, 1, 1];
let test2 = [5, 9, 2, 3, 4];
let test3 = [3, 6, 9, 1, 1];
let test4 = [7, 7, 4, 2, 1];
let test5 = [3, 3, 1, 9, 2];
let test6 = [742407782, 90529439, 847666641, 8651519, 821801924];

let val = taumBday(...test6);

console.log(val);