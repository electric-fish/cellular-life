export const gridFunctions = {

  iterateGrid: (size, data) => {
    var newData = JSON.parse(JSON.stringify(data));

    const initializeMemo = () => {
      var memo = [];
      for (var i = 0; i < size; i++) {
        var memoRow = [];
        for (var j = 0; j < size; j++) {
          memoRow.push(0);
        }
        memo.push(memoRow);
      }
      return memo;
    }

    var memo = initializeMemo();

    const checkDeadCell = (x, y) => { // Any dead cell with three live neighbors becomes a live cell.
      // console.log("checking 0: (" + x + ", " + y + ")");
      var liveCount = 0;
      for (var u = x - 1; u <= x + 1; u++) {
        if (0 <= u && u < size) {
          for (var v = y - 1; v <= y + 1; v++) {
            if (0 <= v && v < size) {
              if (!(u == x && v == y) && data[u][v] === 1) {
                liveCount++;
              }
            }
          }
        }
      }
      if (liveCount === 3) {
        newData[x][y] = 1;
      }
      // console.log("liveCount = " + liveCount);
    }

    const checkNeighbors = (row, col) => {
      var count = 0;
      for (var a = row - 1; a <= row + 1; a++) {
        if (0 <= a && a < size) {
          for (var b = col - 1; b <= col + 1; b++) {
            if (0 <= b && b < size) {
              if (!(a == row && b == col)) {                
                // console.log("a, b: (" + a + ", " + b + ")");
                if (data[a][b] === 1) {
                  count++;
                } else if (memo[a][b] === 0) {
                  checkDeadCell(a, b);
                  memo[a][b] = 1;
                }
              }
            }
          }
        } 
      }
      // console.log(count);
      return count;
    }

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (data[i][j] === 1) {
          // console.log("i, j: (" + i + ", " + j + ")");
          // console.log("--");
          var neighborCount = checkNeighbors(i, j);
          if (neighborCount !== 2 && neighborCount !== 3) {
            newData[i][j] = 0;
          }
          // console.log("=====================");
        }
      }
    }

    // console.log(newData);
    return newData;
  }

}