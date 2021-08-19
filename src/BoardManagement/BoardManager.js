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
        console.log(this.board.data[0][4].checkMove([6,4], this.board.data));
    }

    printBoard = () => <BoardPrinter board={this.board.data} />;
}

export default BoardManager;