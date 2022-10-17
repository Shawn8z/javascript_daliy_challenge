function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    
    let deduct = d;
    let minCost = m;
    let totalSum = s;
    let gameBougth = 0;

    let gameCost = p;
    for (let i = 1; totalSum - gameCost >= 0; i++) {
        totalSum -= gameCost;
        gameBougth += 1;

        if (gameCost - deduct > minCost) {
            gameCost -= deduct;
        } else {
            gameCost = minCost;
        }
    }   

    return gameBougth;
}



let test1 = [16, 2, 1, 9981];
let val = howManyGames(...test1);
console.log(val);