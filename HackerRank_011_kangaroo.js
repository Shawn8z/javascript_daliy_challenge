function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if ((x2 > x1 && v2 > v1)) {
        return "NO";
    }

    let steps = (x2 - x1) / (v1 - v2);
    
    if (Number.isInteger(steps)) {
        return "YES";
    } else {
        return "NO"
    }
}


let val = kangaroo(14, 4, 98, 2);


console.log(val);
