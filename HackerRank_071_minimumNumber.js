function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0;

    let regexD = /[0-9]/;
    if (!regexD.test(password)) {
        console.log("digit");
        count += 1;
    }

    let regexL = /[a-z]/;
    if (!regexL.test(password)) {
        console.log("lower case letter");
        count += 1;
    }

    let regexU = /[A-Z]/;
    if (!regexU.test(password)) {
        console.log("upper case letter");
        count += 1;
    }

    let regexS = /[!@#$%^&*()\-+]/;
    if (!regexS.test(password)) {
        console.log("special character");
        count += 1;
    }

    console.log(`count before length ${count}`);


    if (n == 6 && count == 0) {
        return 0;
    }

    if (n < 6) {
        console.log("password too short");
        if (count == 0) {
            console.log("a")
            count = 6 - n;
        } else if (count <= 6 - n){
            console.log("b")
            count = 6 - n;
        } else if (n !== password.length) {
            console.log("c")
            count -= 6 - n;
        }
    } 

    // console.log(count);
    return count;
}

let val1 = [7, "AUzs-nV"];

minimumNumber(...val1);