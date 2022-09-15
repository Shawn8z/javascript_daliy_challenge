function saveThePrisoner(n, m, s) {
    // Write your code here
    let numOfPerson = n;
    let numOfSweets = m;
    let startingNum = s;
    let personArr = []
    let badSeat = 0;

    for (let i = 1; i <= numOfPerson; i++) {
        personArr.push(i);
    }
    
    for (let i = 1; i <= numOfSweets - 1; i++) {
        badSeat = (i + startingNum ) % numOfPerson;
        console.log(badSeat)
    }

    if (badSeat == 0) {
    
        return numOfPerson;
    } else {

        return badSeat
    }
    
    // console.log(6 % 5 + (s - 1)) ;
    // return result;
}


let n = 7;
let m = 19;
let s = 2;

let val = saveThePrisoner(n, m, s);


// In this problem, we need to determine the ID of the prisoner reached after moving M-1 steps from S.

// ID of last prisoner= (M-1+S)

// Since we are moving in a circle, we need to get the modulo of this sum with .
// Because the IDs start from 1, the ID of the last prisoner is (M - 1 + S - 1) % N + 1)