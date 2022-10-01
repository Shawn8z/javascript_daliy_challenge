function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    let fine = 0;

    if ( d1 <= d2 && m1 == m2 && y1 == y2 ) {
        return fine;
    }

    if (y1 > y2) {
        fine = 10000;
        return fine;
    }

    if ( m1 > m2 && y1 == y2 ) {
        let tempVal = (m1 - m2) * 500;
        fine += tempVal;
    }

    if ( d1 > d2 && m1 == m2 && y1 == y2 ) {
        let tempVal = (d1 -d2) * 15;
        fine += tempVal;
    }

    return fine;
}


let fine = libraryFine(9, 6, 2015, 6, 6, 2015);
console.log(fine);