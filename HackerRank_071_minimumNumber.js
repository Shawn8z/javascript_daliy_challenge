function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0;

    let regexD = /[0-9]/;
    if (!regexD.test(password)) {
        // console.log("password need to contain at least one digit");
        count += 1;
    }

    let regexL = /[a-z]/;
    if (!regexL.test(password)) {
        // console.log("password need to contain at least one lower case letter");
        count += 1;
    }

    let regexU = /[A-Z]/;
    if (!regexU.test(password)) {
        // console.log("password need to contain at least one upper case letter");
        count += 1;
    }

    let regexS = /[!@#$%^&*()-+]/;
    if (!regexS.test(password)) {
        // console.log("password need to contain at least one upper special characters");
        count += 1;
    }

    // console.log(`count before length ${count}`);
    if (n == 6 && count == 0) {
        return 0;
    }

    if (n < 6) {
        // console.log("password too short");
        if (count == 0) {
            // console.log(1)
            count = 6 - n;
        } else if (count <= 6 - n){
            // console.log(2)
            count = 6 - n;
        } else {
            // console.log(3)
            count -= 6 - n;
        }
    }

    console.log(count);
    return count;
}

let val1 = [5, "2bbbb"];

minimumNumber(...val1);