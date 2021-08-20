import BasePiece from "../BasePiece";

const moves = [0, 0, 0, 0, 8, 8, 8, 8];

// For the bishop, the difference of the old coordinates to the new ones should be equal in terms of x/y.

class Bishop extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove = (newPosition, board) => true;
}

export default Bishop;