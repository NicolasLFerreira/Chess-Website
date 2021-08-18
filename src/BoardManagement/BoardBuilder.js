// BoardBuilder is called when the match starts.
// It builds the board by creating the pieces (calls other classes for that) and puts them in the instance of the Board class.

// The way pieces id work:
// King = 0
// Queen = 1
// Rook = 2
// Bishop = 3
// Knight = 4
// Pawn = 5
// Blank_space = 6

class BoardBuilder {
    constructor() {
        this.position = new Array(2);
        this.team = undefined;
    }

    buildBoard() {
        const size = 8;
        let board = new Array(size);

        for (let row = 0; row < size; row++) {
            board[row] = new Array(size);

            for (let column = 0; column < size; column++) {
                this.position = [row, column];

                if (row <= 1 || row >= 6) {
                    this.team = row < 4;

                    if (row == 0 || row == 7) {

                        // Creates rooks
                        if (column == 0 || column == 7)
                            board[row][column] = this.buildPiece(2);

                        // Creates knights
                        else if (column == 1 || column == 6)
                            board[row][column] = this.buildPiece(4);

                        // Creates bishops
                        else if (column == 2 || column == 5)
                            board[row][column] = this.buildPiece(3);

                        // Creates queen
                        else if (column == 3)
                            board[row][column] = this.buildPiece(1);

                        // Creates king
                        else
                            board[row][column] = this.buildPiece(0);

                    }
                    // Creates pawn
                    else
                        board[row][column] = this.buildPiece(5);
                }
                // Creates empty
                else {
                    this.team = undefined;
                    board[row][column] = this.buildPiece(6);
                }
            }
        }

        return board;
    }

    buildPiece = (id) => ({
        "id": id,
        "team": this.team,
        "position": this.position
    });
}

export default BoardBuilder;