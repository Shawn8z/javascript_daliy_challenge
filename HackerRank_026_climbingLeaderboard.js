function climbingLeaderboard(ranked, player) {
    // Write your code here

    let preScore = null;
    let rank = 1;
    let ranks = {};
    let result = [];
    
    // build the ranks object
    for (let item of ranked) {
        if (preScore === null) {
            preScore = item;
            ranks[item] = rank
        }

        if (item === preScore) {
            ranks[item] = rank
        }

        if (item < preScore) {
            rank += 1;
            ranks[item] = rank
        }

        preScore = item;
    }


    for (let item of player) {

        getRank(item, ranks);

    }

    

    function getRank(score, rankObj) {
        for ( let key of Object.keys(rankObj) ) {
            if (score - Number(key) < 0) {
                console.log(rankObj[key] + 1);
                return rankObj[key] + 1;

            } else if (score - Number(key) == 0) { 
                console.log(rankObj[key]);
                return rankObj[key];

            } else if (score - Number(key) > 0) {
                
                if (rankObj[key] === 1) {
                    console.log(1);
                    return 1;
                }
                continue;
            }
            
        }
    }

}


let rankedArr1 = [100, 100, 50, 40, 40, 20, 10];
let rankedArr2 = [100, 90, 90, 80, 75, 60];

let playerScores1 = [5, 25, 50, 120];
let playerScores2 = [50, 65, 77, 90, 102];

climbingLeaderboard(rankedArr2, playerScores2);



let val = [
    100, 100, 50, 40,
    40,  30, 20, 10
]

// val.splice(7+1, 0, 5);
// console.log(val);