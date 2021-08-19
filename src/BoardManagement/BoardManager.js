import BoardBuilder from "./BoardBuilder";
import BoardPrinter from "./BoardPrinter";
import Board from "./Board";

// BoardManager takes care of updating the data of the Board instance.

class BoardManager {
    constructor() {
        this.board = new Board(new BoardBuilder().buildBoard());
        this.test();
    }

    test() {
        let p = [0, 4];
        let t = [p[0] + 1, 6];
        let po = this.board.data[p[0]][p[1]];
        let to = this.board.data[t[0]][t[1]];

        console.log("------------------------------------------------------------");
        console.log("Piece moving: " + po.constructor.name);
        console.log(p);
        console.log("");
        console.log("Target: " + to.constructor.name);
        console.log(t);
        console.log("");
        console.log("Status: " + po.checkMove(t, this.board.data));
    }

    printBoard = () => <BoardPrinter board={this.board.data} />;
}

export default BoardManager;