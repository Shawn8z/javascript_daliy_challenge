function saveThePrisoner(n, m, s) {
    // Write your code here




    let  result = (m - 1 + s);


    console.log(6 % 5 + (s - 1)) ;
    return result;
}


let n = 3;
let m = 7;
let s = 3;

let val = saveThePrisoner(n, m, s);


// In this problem, we need to determine the ID of the prisoner reached after moving M-1 steps from S.

// ID of last prisoner= (M-1+S)

// Since we are moving in a circle, we need to get the modulo of this sum with .
// Because the IDs start from 1, the ID of the last prisoner is (M - 1 + S - 1) % N + 1)