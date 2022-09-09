function saveThePrisoner(n, m, s) {
    // Write your code here
    let candyCount = m;
    let seatArr = [];

    let currentSeat = s;
    for (let i = 1; i <= n; i++) {
        seatArr.push(i);
    }

    // (candyCount - 1 )is because the function only output the nextSeat, 
    // it doesn`t consider that the start seat has taken the candy,
    // so the total count of loops will be adjusted for that.
    for (let i = 0; i < candyCount - 1 ; i++) {

        currentSeat = moveOverOnePerson(seatArr, currentSeat, n);

    }


    function moveOverOnePerson(seatArr, currentSeat, n) {
        let EndIndex = n;
        let index = seatArr.findIndex( (item) => item === currentSeat );
        let nextIndex = 0;

        if (index + 1 >= EndIndex) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }

        let nextSeat = seatArr[ nextIndex ];

        return nextSeat;
    }

    return currentSeat;
}



let n = 7;
let m = 19;
let s = 2;

let val = saveThePrisoner(n, m, s);


// In this problem, we need to determine the ID of the prisoner reached after moving M-1 steps from S.

// ID of last prisoner= (M-1+S)

// Since we are moving in a circle, we need to get the modulo of this sum with .
// Because the IDs start from 1, the ID of the last prisoner is (M - 1 + S - 1) % N + 1)