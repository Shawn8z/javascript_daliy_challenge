function climbingLeaderboard(ranked, player) {
    // Write your code here
    let leaderBoard = [];
    let boardLength = ranked.length;

    for (let i = 0; i < boardLength ; i++) {
        if (!leaderBoard.includes(ranked[i])) {
            leaderBoard.push(ranked[i]);
        }
    }


    for (let item of player) {
        
        addScoreToLeaderBoard(item, leaderBoard, boardLength);

    }




    function addScoreToLeaderBoard(score, leaderBoardArr, arrLength) {

        for (let i = arrLength - 1; i >= 0; i--) {
        
            if (score - leaderBoardArr[i] < 0) {
                console.log(i + 2);
                return i + 2

            } else if (score - leaderBoardArr[i] == 0) {
                console.log(i + 1);
                return i + 1;
                
            } else if (score - leaderBoardArr[0] > 0) {
                console.log(1);
                return 1;

            }
        }
    }

}


let rankedArr = [100, 100, 50, 40, 40, 20, 10];
let rankedArr2 = [100, 90, 90, 80, 75, 60];
// 100 90 90 80 75 60
let playerScores = [5, 25, 50, 120];
let playerScores2 = [50, 65, 77, 90, 102];

climbingLeaderboard(rankedArr2, playerScores2);



let val = [
    100, 100, 50, 40,
    40,  30, 20, 10
]

// val.splice(7+1, 0, 5);
// console.log(val);