import PieceManager from "../PieceManangement/PieceManager";

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

const pieceManager = new PieceManager();

class BoardBuilder {
    constructor() {
        this.position = new Array(2);
        this.team = undefined;
    }

    buildBoard() {
        const size = 8;
        let board = new Array(size);

        // Rows.
        for (let row = 0; row < size; row++) {
            board[row] = new Array(size);

            // Columns.
            for (let column = 0; column < size; column++) {
                this.position = [row, column];

                // The white and black ranks.
                if (row <= 1 || row >= 6) {
                    this.team = row < 4; // Defines whether it's the white or black rank.

                    // Back Ranks.
                    if (row == 0 || row == 7) {

                        // Creates rooks.
                        if (column == 0 || column == 7)
                            board[row][column] = this.buildPiece(2);

                        // Creates knights.
                        else if (column == 1 || column == 6)
                            board[row][column] = this.buildPiece(3);

                        // Creates bishops.
                        else if (column == 2 || column == 5)
                            board[row][column] = this.buildPiece(4);

                        // Creates queen.
                        else if (column == 3)
                            board[row][column] = this.buildPiece(1);

                        // Creates king.
                        else
                            board[row][column] = this.buildPiece(0);
                    }

                    // Front ranks.
                    else {
                        if (!true) {
                            // Creates pawn.
                            board[row][column] = this.buildPiece(5);
                        }

                        // Incase I want to remove the pawn rank.
                        else {
                            this.team = undefined;
                            board[row][column] = this.buildPiece(6);
                        }
                    }
                }
                // Creates empty.
                else {
                    this.team = undefined;
                    board[row][column] = this.buildPiece(6);
                }
            }
        }

        // Raw data of the board. JSX&cia are processed in the BoardPrinter.
        return board;
    }

    buildPiece(id){
        return pieceManager.buildPiece(id, this.team, this.position);
    }
}

export default BoardBuilder;