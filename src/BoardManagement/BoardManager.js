import PieceManager from "../PieceManangement/PieceManager";
import BoardBuilder from "./BoardBuilder";
import BoardPrinter from "./BoardPrinter";
import Board from "./Board";
import Debugger from "../Misc/Debugging";

// BoardManager takes care of updating the data of the Board instance.

const debug = new Debugger();

class BoardManager {
    constructor() {
        this.board = new Board(new BoardBuilder(this.callMovement).buildBoard());
        // let p = [0, 4];
        // let t = [p[0] + 1, p[1] + 1];
        // this.movementProcessor(this.board.get(p[0], p[1]), this.board.get(t[0], t[1]));

        this.selectedPiece = undefined;
    }

    callMovement(object) {
        console.log(object["constructor"].name);
        console.log(object.hasOwnProperty("constructor"));
        debug.boardData(this.board, object);
        debug.boardData(this.board, this.selectedPiece);
        if (this.selectedPiece == undefined) {
            if (object.id == 6) return;
            else this.selectedPiece = object;
        }
        else {
            if (object.team != this.selectedPiece.team) this.movementProcessor(this.selectedPiece, object);
            else this.selectedPiece = undefined;
        }
    }

    movementProcessor(piece, target) {
        // Debug

        console.clear();
        debug.movementData(this.board, piece, target);
        debug.boardData(this.board, piece);
        
        // Move

        if (piece.checkMove(target, this.board.get())) {
            this.movePiece(piece, target);
        }

        debug.boardData(this.board, target);
    }

    movePiece(piece, target) {
        this.board.data[target.position[0]][target.position[1]] = piece;
        this.board.data[piece.position[0]][piece.position[1]] = new PieceManager().buildPiece(6, undefined, [piece.position[0], piece.position[1]]);
    }

    printBoard = () => <BoardPrinter board={this.board.data} caller={(object) => this.callMovement(object)}/>;
}

export default BoardManager;