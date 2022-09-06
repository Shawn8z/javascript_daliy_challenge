function designerPdfViewer(h, word) {
    // Write your code here
    let heightArr = [];

    for (let char of word) {
        let charIndex = char.charCodeAt() - 97;
        heightArr.push(h[ charIndex ]);
    }
    
    return Number( Math.max(...heightArr) ) * word.length;
}


let hStr = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5";
let h = hStr.split(" ");

let val = designerPdfViewer(h, "abc");
console.log(val);