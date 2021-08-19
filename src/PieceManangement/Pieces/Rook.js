import BasePiece from "../BasePiece";

const moves = [8, 8, 8, 8, 0, 0, 0, 0];

// For the bishop, the difference of the old coordinates to the new ones should be equal in terms of x/y.

class Rook extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }
}

export default Rook;