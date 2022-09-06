function utopianTree(n) {
    // Write your code here
    let result = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            result *= 2;
        } else {
            result += 1;
        }
    }

    return result;
}