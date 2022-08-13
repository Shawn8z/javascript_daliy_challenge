function staircase(n) {
    // Write your code here
    
    let resultRows = [];

    for (let i = 1; i <= n; i++) {
        let tempRow = "";
        let spaceCount = 0;
        let charCount = 0;
        
        spaceCount = n - i;
        charCount = i;

        for (let b = 0; b < spaceCount; b++) {
            tempRow += " ";
        }

        for (let c = 0; c < charCount; c++) {
            tempRow += "#";
        }

        resultRows.push(tempRow);
    }

    for (let i = 0; i < resultRows.length; i++) {
        console.log(resultRows[i]);
    }
}


staircase(6);