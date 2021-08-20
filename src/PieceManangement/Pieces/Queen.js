import BasePiece from "../BasePiece";

const moves = [8, 8, 8, 8, 8, 8, 8, 8];

// For the bishop, the difference of the old coordinates to the new ones should be equal in terms of x/y.

class Queen extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove = (newPosition, board) => true;
}

export default Queen;