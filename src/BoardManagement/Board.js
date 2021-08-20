// Board is the object class that holds info about the current state of the board.
// Other classes operates based on the information stored in the object of this class.

class Board {
    constructor(boardArray) {
        // Gets the intial information of the chess board.
        // Declares the arrays that will keep track of the current pieces.

        this.data = boardArray;
    }

    get = (row, column) =>
    (
        row == undefined ?
            this.data :
            (
                column == undefined ?
                    this.data[row] :
                    this.data[row][column]
            )
    );

    set = (piece, position) =>
        this.data[position[0]][position[1]] = piece;
}

export default Board;