function squares(a, b) {
    // Write your code here
    let numStart = a;
    let numEnd = b;
    let counter = 0;

    // for (let i = numStart; i <= numEnd; i++) {
    //     let rootResult = Math.sqrt(i);
        
    //     if (Number.isInteger(rootResult)) {
    //         counter += 1;
    //     }
        
    // }
    // for (let i = 1; i <= numEnd; i++) {
    //     if (i * i >= numStart && i * i <= numEnd) {
    //         counter += 1;
    //     }
    // }

    console.log(counter);
    return counter;
}


squares(3, 9);
squares(17, 24);