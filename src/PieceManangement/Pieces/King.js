import BasePiece from "../BasePiece";

const moves = [1, 1, 1, 1, 1, 1, 1, 1];

class King extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove(newPosition, board) {
        let target = board[newPosition[0]][newPosition[1]];

        if (((newPosition[0] - this.position[0] >= 1) || (newPosition[0] - this.position[0] <= -1)) ||
            ((newPosition[1] - this.position[1] >= 1) || (newPosition[1] - this.position[1] <= -1))) return false;

        if (target.team == this.team) return false;
        // if (target.id != 2 && target.hasMoved && this.hasMoved) return false;

        return true;
    }
}

export default King;