function angryProfessor(k, a) {
    // Write your code here
    let totalStudents = a.length;
    let lateStudents = 0;

    for (let item of a) {
        if (item > 0) {
            lateStudents += 1;
        }
    }

    let earlybirds = totalStudents - lateStudents;
    if (earlybirds >= k) {
        return "NO";
    } else {
        return "YES";
    }
}   



let k1 = 3;
let array1 = [-1, -3, 4, 2];

let k2 = 2;
let array2 = [0, -1, 2, 1];


angryProfessor( k2, array2 );
