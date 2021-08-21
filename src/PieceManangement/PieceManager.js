import King from "../PieceManangement/Pieces/King";
import Queen from "../PieceManangement/Pieces/Queen";
import Rook from "../PieceManangement/Pieces/Rook";
import Bishop from "../PieceManangement/Pieces/Bishop";
import Knight from "../PieceManangement/Pieces/Knight";
import Pawn from "../PieceManangement/Pieces/Pawn";
import BasePiece from "../PieceManangement/BasePiece";

const pieceObjects = [King, Queen, Rook, Knight, Bishop, Pawn, BasePiece];

// Manages operations related to pieces.

class PieceManager {
    constructor() {
        this.emptyPiece = this.buildPiece(6, undefined, [-1, -1])
    }

    // Returns a new piece instance with its respective data.
    buildPiece = (id, team, position) => new pieceObjects[id](
        {
            "id": id, // ID defines what piece it is.
            "team": team, // true = black, false = white, undefined = neutral.
            "position": position // Position for movement checking.
        }
    );
}

export default PieceManager;