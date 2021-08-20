import BasePiece from "../BasePiece";

const moves = [1, 1, 1, 1, 1, 1, 1, 1];

class King extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove(target, board) {
        // 3 - 2 == 1 -> target[0] - this.position[0] >= 1 -> true
        // 2 - 3 == -1 -> target[0] - this.position[0] <= -1 -> true
        // 5 - 2 == 3 -> target[0] - this.position[0] <= 1 -> false
        // 2 - 5 == -3 -> target[0] - this.position[0] >= 1 -> false

        // console.log("Calc: ");
        // console.log(target[0] - this.position[0]);

        if ((target.position[0] - this.position[0] > 1 || target.position[0] - this.position[0] < -1) ||
            (target.position[1] - this.position[1] > 1 || target.position[1] - this.position[1] < -1))
            return false;
        return true;
    }
}

export default King;