import BasePiece from "../BasePiece";

const moves = [1, 1, 1, 1, 1, 1, 1, 1];

class King extends BasePiece {
    constructor(piece) {
        super(piece, moves);

    }

    checkMove(newPosition, board) {
        let target = board[newPosition[0]][newPosition[1]];

        // 3 - 2 == 1 -> newPosition[0] - this.position[0] >= 1 -> true
        // 2 - 3 == -1 -> newPosition[0] - this.position[0] <= -1 -> true
        // 5 - 2 == 3 -> newPosition[0] - this.position[0] <= 1 -> false
        // 2 - 5 == -3 -> newPosition[0] - this.position[0] >= 1 -> false
        
        // console.log("Calc: ");
        // console.log(newPosition[0] - this.position[0]);

        if ((newPosition[0] - this.position[0] > 1 || newPosition[0] - this.position[0] < -1) || (newPosition[1] - this.position[1] > 1 || newPosition[1] - this.position[1] < -1)) return false;

        return true;
    }
}

export default King;