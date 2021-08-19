import BasePiece from "../BasePiece";

const moves = [1, 0, 0, 0, 0, 0, 0, 0];

// For the bishop, the difference of the old coordinates to the new ones should be equal in terms of x/y.

class Pawn extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove(newPosition, board) {
        let target = board[newPosition[0]][newPosition[1]];
        if (newPosition[0] != this.position[0]) return false;
    }
}

export default Pawn;