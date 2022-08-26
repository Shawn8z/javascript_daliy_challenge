function catAndMouse(x, y, z) {
    let disToMouA = Math.abs(x - z);
    let disToMouB = Math.abs(y - z);

    if (disToMouA === disToMouB) {
        return "Mouse C";
    } 

    if (disToMouA > disToMouB) {
        return "Cat B";
    } else {
        return "Cat A";
    }
}


// 1 2 3
// 1 3 2

let val = catAndMouse(1, 3, 2);
console.log(val);