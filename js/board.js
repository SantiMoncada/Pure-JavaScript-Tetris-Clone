class tetrisBoard {
    #board = undefined;
    #currentPiece = undefined;

    constructor(columns = 10, rows = 20) {
        this.#board = Array(rows).fill().map(() => Array(columns).fill(0));
    }

    updateBoard() {

    }

    addNewPiece() {

    }

    getTextBoard() {
        let output = "";
        for (let i = 0; i < this.#board.length; i++) {
            for (let j = 0; j < this.#board[i].length; j++) {
                output += this.#board[i][j] + " ";
            }
            output += "\n";
        }
        return output;
    }

}