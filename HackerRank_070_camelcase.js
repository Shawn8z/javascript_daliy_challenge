function camelcase(s) {
    // Write your code here
    let str = s;
    let result = 1;

    for (let i = 0; i < str.length; i++) {
        
        if (isUpper(str[i]) == true) {
            result += 1;
        }
    }

    function isUpper(char) {
        let regex = /[A-Z]/;
        return regex.test(char);
    }

    return result;
}


let val1 = "saveChangesInTheEditor";

let val = camelcase(val1);
console.log(val)