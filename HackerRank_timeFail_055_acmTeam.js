function acmTeam(topic) {
    // Write your code here
    
    let resultArr = [];
    let sumArr = [];

    for (let i = 0; i < topic.length; i++) {
        if (i == topic.length - 1) {
            break;
        }

        let currentMember = topic[i];
        let otherMember = topic.slice(i + 1);

        let arr = joinMembers(currentMember, otherMember);

        if (arr.length != 0) {
            resultArr = [...resultArr, ...arr];
        } else {
            break;
        }
    }

    for (let i = 0; i < resultArr.length; i++) {
        let val = itemSum(resultArr[i]);

        sumArr.push(val);
    }

    function joinMembers(memb, otherMemb) {
        let resultArr = [];
        
        for (let i = 0; i < otherMemb.length; i++) {
            let membB = otherMemb[i];
            let result = "";

            for (let b = 0; b < memb.length; b++) {
                if (memb[b] == "1" || membB[b] == "1") {
                    result += "1";
                } else {
                    result += "0";
                }
            }
            resultArr.push(result);
        }
        return resultArr;
    }

    function itemSum(str) {
        let result = 0;
        let strLength = str.length;

        for (let i = 0; i < strLength; i++) {
            result += Number(str[i]);
        }

        return result;
    }

    let maxTopic = 0;
    maxTopic = Math.max(...sumArr);
    let maxTopicGroups = 0;

    for (let i = 0; i < sumArr.length; i++) {
        
        if (sumArr[i] == maxTopic) {
            maxTopicGroups += 1;
        }
    }

    // console.log(maxTopic);
    // console.log(maxTopicGroups);
    return [maxTopic, maxTopicGroups];
}




let topics = ["10101", "11100", "11010", "00101"];

let val = acmTeam(topics);
// console.log(val);