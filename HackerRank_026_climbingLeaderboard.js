function climbingLeaderboard(ranked, player) {
    // Write your code here
    let leaderBoard = [...ranked];
    let boardLength = ranked.length;

    //find the right place for play score
    let testVal = 30;


    for (let item of player) {
        let result = addScoreToLeaderBoard(item, leaderBoard, boardLength);
        let rank = getRank(item, result);
    }



    function addScoreToLeaderBoard(score, leaderBoardArr, arrLength) {
        let resultArr = [...leaderBoardArr];
        let length = arrLength;
        

        for (let i = length - 1; i >= 0; i--) {
        
            if (score - resultArr[i] <= 0) {
                resultArr.splice(i + 1, 0, score);
                break;

            } else if (score - resultArr[i] > 0) {

                if (score - resultArr[0] > 0) {
                    resultArr.splice(0, 0, score);
                    break;
                }
                continue;
            }  
            
        }
        // console.log(resultArr);
        return resultArr;
    }
    
    
    
    function getRank(score, boardArr) {
        let scoreTypes = [];
        // get all ranks
        for (let i = 0; i < boardArr.length; i++) {
            if (!scoreTypes.includes(boardArr[i])) {
                scoreTypes.push(boardArr[i]);
            }
        }
        // console.log(scoreTypes);


        return scoreTypes.findIndex((num) => num === score ) + 1;
    }
    

}


let rankedArr = [100, 100, 50, 40, 40, 20, 10];
let playerScores = [5, 25, 50, 120];

climbingLeaderboard(rankedArr, playerScores);


let val = [
    100, 100, 50, 40,
     40,  30, 20, 10
  ]

// val.splice(7+1, 0, 5);
// console.log(val);