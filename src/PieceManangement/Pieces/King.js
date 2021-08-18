import BasePiece from "../BasePiece";

class King extends BasePiece {
    constructor(piece, movements) {
        super(piece, movements)

        this.canCastle = true;
    }

    moves() {
        this.legalMovements
    }
}

export default King;