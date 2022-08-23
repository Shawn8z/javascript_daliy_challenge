function dayOfProgrammer(year) {
    // Write your code here
    let day = 256;

    if (year <= 1917) {
    

        if (year % 4 === 0) {
            day -= 244;
            return `${day}.09.${year}`;
        } 

        day -= 243;
        return `${day}.09.${year}`;

    } else if (year === 1918) {
       
        return "26.09.1918";

    } else {

        if (year%400 === 0 || ((year%4) === 0 && year%100 !== 0) ) {
            console.log("leap year?")
            day -= 244;
            return `${day}.09.${year}`
        }

        day -= 243;
        return `${day}.09.${year}`;

    }
}





let val = dayOfProgrammer(1800);
console.log(val);