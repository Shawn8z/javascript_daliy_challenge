function chocolateFeast(n, c, m) {
    // Write your code here
    let budget = n;
    let barCost = c;
    let wrapperCost = m;

    let wrapperCount = 0;
    let leftOverWrappers = 0;

    let totalBars = 0;

    totalBars = Math.floor(budget / barCost);
    wrapperCount = totalBars;

    while ( wrapperCount >=  wrapperCost ) {

        let newBars = Math.floor(wrapperCount / wrapperCost);
        totalBars += newBars;

        leftOverWrappers = wrapperCount - newBars * wrapperCost;
        wrapperCount = leftOverWrappers + newBars;

    }

    return totalBars;
}



let arr1 = [10, 2, 5];

let val = chocolateFeast(...arr1);
console.log(val);