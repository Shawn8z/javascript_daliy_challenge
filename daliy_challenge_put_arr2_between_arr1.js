function isFirstSuperior(arr1, arr2) {
	let arrLength = arr1.length;
    let matchingState = [];
    let isPassing = 0;

    for (let i = 0; i < arrLength; i++) {

        if (arr1[i] == arr2[i]) {

            matchingState.push(0);
            continue;

        } else {

            if (typeof arr1[i] == "number") {
                if (arr1[i] > arr2[i]) {
                    matchingState.push(1);
                } else {
                    matchingState.push(0);
                }
            }

            if (typeof arr1[i] == "string" ) {

                if (arr1[i].length > 1) {

                    if (arr1[i].length > arr2[i].length) {
                        matchingState.push(1);
                    } else {
                        matchingState.push(0);
                    }

                }

                if (arr1[i].length === 1) {
                    if (arr1[i] > arr2[i]) {
                        matchingState.push(1);
                    } else {
                        matchingState.push(0);
                    }
                }
                
            }
        }
    }

    isPassing = matchingState.findIndex(item => item === 1);


    if (isPassing >= 0) {
        return true;
    } else {
        return false;
    }

}

let val = isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']);



console.log(val);

