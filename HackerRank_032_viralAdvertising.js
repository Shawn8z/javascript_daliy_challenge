function viralAdvertising(n) {
    // Write your code here
    let peopleReached = 5;
    let totalLiked = 0;

    for (let i = 1; i <= n; i++) {
        let effectiveCount = getLikedCount(peopleReached);
        totalLiked += effectiveCount;
        peopleReached = effectiveCount * 3;
    }

    function getLikedCount(num) {
        return Math.floor(num / 2);
    }

    return totalLiked;
}


console.log( viralAdvertising(3) );