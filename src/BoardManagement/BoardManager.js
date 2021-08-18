import BoardBuilder from "./BoardBuilder";
import Board from "../BoardOld/Board";

// BoardManager takes care of updating the data of the Board instance.

class BoardManager {
    constructor() {
        this.board = new Board(new BoardBuilder().buildBoard());
    }
}

export default BoardManager;