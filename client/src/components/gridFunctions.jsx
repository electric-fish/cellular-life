export const gridFunctions = {

  iterateGrid: (size, data) => {
    var newData = data;

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

    const checkNeighbors = (row, col) => {
      var count = 0;
      for (var a = row - 1; a <= row + 1; a++) {
        if (0 <= a && a < size) {
          for (var b = col - 1; b <= col + 1; b++) {
            if (0 <= b && b < size) {
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

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (data[i][j] === 1) {
          var neighborCount = checkNeighbors(i, j);
          if (neighborCount !== 2 && neighborCount !== 3) {
            newData[i][j] = 0;
          }
        }
      }
    }


    return data;
  }

}