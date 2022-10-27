function cavityMap(grid) {
    // Write your code here
    let yTop = 0;
    let yBottom = grid.length - 1;
    let itemLength = grid[0].length
    let xLBorder = 0;
    let xRBorder = itemLength - 1;
    
    for (let y = 0; y < grid.length; y++) {
        if ( y !== yBottom && y !== yTop) {


            for (let x = 0; x < itemLength; x++) {
                if ( x !== xRBorder && x !== xLBorder) {
                    let targetNum = grid[y][x];

                    let edgeArr = [
                        grid[y-1][x],
                        grid[y+1][x],
                        grid[y][x-1],
                        grid[y][x+1]
                    ];
                    let isMax = !edgeArr.some((item) => item >= targetNum);
                    if (isMax) {
                        let strL = grid[y].slice(0, x);
                        let strR = grid[y].slice(x+1);
                        grid[y] = strL + "X" + strR;
                    }
                } 
            }
        }
    }
    let result = grid;
    return result;
}


let grid = ["1112", "1912", "1892", "1234"];
let val = cavityMap(grid);
console.log(val);