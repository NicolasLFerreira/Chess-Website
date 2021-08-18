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
    buildBoard() {
        let board = new Array(8);
        let team = 0;

        for (let row = 0; row < 8; row++) {
            board[row] = new Array(8);

            for (let column = 0; column < 8; column++) {
                if (row <= 1 || row >= 6) {
                    team = row < 4 ? 0 : 1;

                    if (row == 0 || row == 7) {
                        if (column == 0 || column == 7) console.log(1); // Creates rooks
                        if (column == 1 || column == 6) console.log(1); // Creates knights
                        if (column == 2 || column == 5) console.log(1); // Creates bishops
                        if (column == 3) console.log(1); // Creates queen
                        if (column == 4) console.log(1); // Creates king
                    }
                    else {
                        console.log(1); // Creates pawn
                    }
                }
                else {
                    team = 2;
                }
            }
        }
    }
}