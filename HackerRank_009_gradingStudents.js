function gradingStudents(grades) {
    // Write your code here

    let arrLength = grades.length;
    let resultArr = [];

    for (let i = 0; i < arrLength; i++) {
        let grade = grades[i];
    
        if (grade < 38) {
            resultArr.push(grade);
            continue;
        }

        let strGrade = grade.toString();
        let firstNum = Number(strGrade[0]);
        let secondNum = Number(strGrade[1]);
        
        if (secondNum == 5 || secondNum == 0) {
            resultArr.push(grade);
            continue;
        }

        let baseNum = firstNum * 10;
        let roundedNum = 0;

        if (secondNum > 5) {
            roundedNum = baseNum + 10;
        } else {
            roundedNum = baseNum + 5;
        }

        if (roundedNum - grade < 3) {
            resultArr.push(roundedNum);
        } else {
            resultArr.push(grade);
        }
    }

    
    return resultArr;
}


let arr = [73, 67, 38, 33];
gradingStudents(arr);
