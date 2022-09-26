function charCount(myChar, str) {
	let target = myChar;
    let length = str.length;
    let counter = 0;

    for (let i = 0; i < length; i++) {
        if (str[i] == target) {
            counter += 1;
        }
    }

    return counter;
}



charCount("a", "edabit")

charCount("c", "Chamber of secrets")

charCount("b", "big fat bubble")