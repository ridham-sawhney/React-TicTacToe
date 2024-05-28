export default function BestMoveProvider(grid) {
    var player = 'O', ai = "X";
    function evaluate(grid) {
        //for all rows
        for (let row = 0; row < 3; row++) {
            if (grid[row][0] != null && grid[row][0] == grid[row][1] && grid[row][1] == grid[row][2]) {
                if (grid[row][0] == ai) {
                    return 10;
                }
                else if (grid[row][0] == player) {
                    return -10;
                }
            }
        }

        //for all columns
        for (let col = 0; col < 3; col++) {
            if (grid[0][col] != null && grid[0][col] == grid[1][col] && grid[1][col] == grid[2][col]) {
                if (grid[0][col] == ai) {
                    return 10;
                }
                else if (grid[0][col] == player) {
                    return -10;
                }
            }
        }

        //forDiagonals
        if ((grid[0][0] != null && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2])
            || (grid[0][2] != null && grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) {
            if (grid[1][1] == ai) {
                return 10;
            }
            else if (grid[1][1] == player) {
                return -10;
            }
        }

        return 0;

    }
    function isMovesAvailable(grid) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] == null) {
                    return true;
                }
            }
        }
        return false;
    }
    function minMax(grid, depth, max) {
        var score = evaluate(grid);
        if (score == 10 || score ==-10) {
            return score ;
        }
        
        if (!isMovesAvailable(grid)) {
            return 0;
        }
        var bestScore;
        if (max) {
            bestScore = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (grid[i][j] == null) {
                        grid[i][j] = ai;
                        var score = minMax(grid, depth + 1, false);
                        grid[i][j] = null;
                        if (score > bestScore) {
                            bestScore = score;
                        }
                    }
                }
            }
        }
        else {
            bestScore = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (grid[i][j] == null) {
                        grid[i][j] = player;
                        var score = minMax(grid, depth + 1, true);
                        grid[i][j] = null;
                        if (score < bestScore) {
                            bestScore = score;
                        }
                    }
                }
            }
        }
        return bestScore;
    }


    function getBestMove(grid) {
        var turn = { i: -1, j: -1 };
        var bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] == null) {
                    grid[i][j] = ai;
                    var score = minMax(grid, 0, false);
                    grid[i][j] = null;
                    if (score > bestScore) {
                        bestScore = score;
                        turn.i = i; turn.j = j;
                    }
                }
            }
        }
        return turn
    }

    return getBestMove(grid);
}