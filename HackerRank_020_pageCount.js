function pageCount(n, p) {
    // Write your code here
    if (p === 1) {
        return 0;
    }

    if (n === p) {
        return 0;
    }

    if ( n%2 !== 0 && p == (n - 1) ) {
        return 0;
    }

    let targetPage;
    let turnPageFromFront = 1;
    let turnPageFromBack = n;
    let countFromFront = 0;
    let countFromBack = 0;

    if (p%2 == 0) {
        targetPage = p + 1;
    } else {
        targetPage = p;
    }

    if (n%2 === 0) {
        turnPageFromBack += 1;
    }
        
    
    while(turnPageFromFront !== targetPage) {
        turnPageFromFront += 2;
        countFromFront += 1;
    }

    while(turnPageFromBack !== targetPage) {
        turnPageFromBack -= 2;
        countFromBack += 1;
    }
        
    return Math.min(countFromBack, countFromFront);
}



let n1 = 6;
let p1 = 2;

let n2 = 5;
let p2 = 4;

pageCount(n2, p2);