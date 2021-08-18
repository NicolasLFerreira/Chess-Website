import BoardBuilder from "./BoardBuilder";
import BoardPrinter from "./BoardPrinter";
import Board from "./Board";

// BoardManager takes care of updating the data of the Board instance.

class BoardManager {
    constructor() {
        this.board = new Board(new BoardBuilder().buildBoard());
    }

    printBoard = () => <BoardPrinter board={this.board.data}/>;
}

export default BoardManager;