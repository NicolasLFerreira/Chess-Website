import PieceManagement from "./PieceManagement";

const pieceManager = new PieceManagement();

class BoardManagement {
    buildBoard() {
        var board = new Array(8);
        var team = true;

        for (let row = 0; row < 8; row++) {
            board[row] = new Array(8);

            for (let column = 0; column < 8; column++) {
                var position = row + "" + column;

                if (row > 1 && row < 6) board[row][column] = pieceManager.createPiece(6, team, position);
                else {
                    team = row >= 4;

                    if (row == 0 || row == 7) {
                        for (let i = 0; i < 3; i++) if (column == i || column == 7 - i) board[row][column] = pieceManager.createPiece(i + 1, team, position);
                        if (column == 4) board[row][column] = pieceManager.createPiece(5, team, position);
                        if (column == 3) board[row][column] = pieceManager.createPiece(4, team, position);
                    }
                }

                if (board[row][column] == null) board[row][column] = pieceManager.createPiece(0, team, position);
            }
        }

        return board;
    }
}

export default BoardManagement;