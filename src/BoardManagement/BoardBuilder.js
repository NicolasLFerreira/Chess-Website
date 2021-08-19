import King from "../PieceManangement/Pieces/King";
import Queen from "../PieceManangement/Pieces/Queen";
import Rook from "../PieceManangement/Pieces/Rook";
import Bishop from "../PieceManangement/Pieces/Bishop";
import Knight from "../PieceManangement/Pieces/Knight";
import Pawn from "../PieceManangement/Pieces/Pawn";
import BasePiece from "../PieceManangement/BasePiece";

const pieceObjects = [King, Queen, Rook, Bishop, Knight, Pawn, BasePiece];

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
                    // Creates pawn.
                    else
                        board[row][column] = this.buildPiece(5);
                    
                    
                    // else {
                    //     this.team = undefined;
                    //     board[row][column] = this.buildPiece(6);
                    // }
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

    // Returns a new piece instance with its respective data.
    buildPiece = (id) => new pieceObjects[id](
        {
            "id": id, // ID defines what piece it is.
            "team": this.team, // true = black, false = white, undefined = neutral.
            "position": this.position // Position for movement checking.
        }
    );

}

export default BoardBuilder;