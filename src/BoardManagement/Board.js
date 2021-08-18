// Board is the object class that holds info about the current state of the board.
// Other classes operates based on the information stored in the object of this class.

class Board {
    // Gets the intial information of the chess board.
    // Declares the arrays that will keep track of the current pieces. 

    constructor(boardArray) {
        this.board = boardArray;

        this.whitePieces = new Array(16);
        this.blackPieces = new Array(16);
    }
}