function isValidSudoku(board: string[][]): boolean | void {
    let isValid: boolean = true;
    for (let i = 0; i < board.length; i++) {
        const arrayRow: number[] = [];
        const arrayColumn: number[] = [];
        for (let j = 0; j < board[i].length; j++) {
            process.stdout.write(`${board[i][j]} `);
            let digitRe = /[0-9]/;
            if(!(digitRe.exec(board[i][j]) || board[i][j] === '.')) {
                isValid = false;
            }
            if(digitRe.exec(board[i][j])) {
                if(!arrayRow.includes(+board[i][j])){
                    arrayRow.push(+board[i][j]);
                } else {
                    isValid = false;
                }
            }
            if(digitRe.exec(board[j][i])) {
                if(!arrayColumn.includes(+board[j][i])){
                    arrayColumn.push(+board[j][i]);
                } else {
                    isValid = false;
                }
            }
        }
        console.log('\n')
    }

    return isValid;
}

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))