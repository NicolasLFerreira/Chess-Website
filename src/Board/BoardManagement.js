var piecesBlack = ['♚', '♛', '♜', '♞', '♝', '♟', <span>&nbsp;</span>]
var piecesWhite = ['♔', '♕', '♖', '♘', '♗', '♙', <span>&nbsp;</span>]


class BoardManagement {
    constructor() {

        this.board = new Array(8);
        this.selectedPiece = undefined;
    }

    createPiece(index, team, pos) {
        return {
            "icon": team ? piecesWhite[index] : piecesBlack[index],
            "team": team,
            "id":
                index + "" +
                (team != null ? (team ? 0 : 1) : 2) + "" +
                pos,
            "pos": pos
        }
    }

    buildBoard() {
        var team = true;

        for (let row = 0; row < 8; row++) {
            this.board[row] = new Array(8);

            for (let column = 0; column < 8; column++) {
                var position = row + "" + column;

                if (row > 1 && row < 6) this.board[row][column] = this.createPiece(6, null, position);
                else {
                    team = row >= 4;

                    if (row == 0 || row == 7) {
                        for (let i = 0; i < 3; i++)
                            if (column == i || column == 7 - i)
                                this.board[row][column] = this.createPiece(3 - i, team, position);
                        if (column == 4)
                            this.board[row][column] = this.createPiece(5, team, position);
                        if (column == 3)
                            this.board[row][column] = this.createPiece(4, team, position);
                    }
                }

                if (this.board[row][column] == null) this.board[row][column] = this.createPiece(0, team, position);
            }
        }

        return this.board;
    }
}

export default BoardManagement;

// var pieceObj = {
//     "icon": "",
//     "team": "",
//     "id": "",
//     "pos": ["", ""]
// };

// ID = index of icon + team 0-white, 1-black, 2-neutral + pos[2] 0 <= x <= 7