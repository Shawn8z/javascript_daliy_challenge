function queensAttack(n, k, r_q, c_q, obstacles) {
    let queenPos = {x: r_q - 1, y: c_q - 1};
    let arr = [];
    let subArr = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        arr.push([...subArr]);
    }

    arr[queenPos.x][queenPos.y] = 9;

    console.log(arr);


    if (k == 0) {
        // console.log(arr);
        let xs = getXSpots(queenPos);
        let ys = getYSpots(queenPos);


        let xSpots = xs.map((item) => [item, queenPos.y]);
        let ySpots = ys.map((item) => [queenPos.x, item]);
        let rSlash = getRSlash(queenPos);
        console.log(xSpots);
        console.log(ySpots);
        console.log(rSlash);
        
    }


    function getXSpots(queen) {
        let xSpots = [];
        for (let i = 0; i < n; i++) {
            if (queen.x != i) {
                xSpots.push(i);
            }
        }
        return xSpots;
    }

    function getYSpots(queen) {
        let ySpots = [];
        for (let i = 0; i < n; i++) {
            if (queen.y != i) {
                ySpots.push(i);
            }
        }
        return ySpots;
    }

    function getRSlash(queen) {
        let rSlash = [];
        for (let i = 0; i < n; i++) {
            if (i != queen.x && i != queen.y) {
                rSlash.push([i, i]);
            }
        }
        return rSlash;
    }

    function getLSlash(queen) {
        let rSlash = [];
        let lowerS = [];
        let upperS = [];

        if (queen.x == n-1 && queen.y == n-1) {
            return rSlash;
        } else if (queen.x == n-1) {
            for (let i = 0; i < n; n++) {
                upperS.push([queen.x-1, queen.y+1]);
            }
        }
    }
}



let girdSize = 4;
let obsCount = 0;
let rNum = 4;
let cNum = 4;
let obs = [];

queensAttack(girdSize, obsCount, rNum, cNum, obs);