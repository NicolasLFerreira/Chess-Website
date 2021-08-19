import Movements from "./Movements";

// The way pieces id work:
// King = 0
// Queen = 1
// Rook = 2
// Bishop = 3
// Knight = 4
// Pawn = 5
// Blank_space = 6

// Piece object format:
// id: identifies the piece
// team: the team of the piece
// general example: 
// piece = {
//     "id": 0-6,
//     "team": 0-2,
//     ?"pos": [0-7,0-7]?
// }


class BasePiece {
    constructor(piece) {
        this.id = piece.id;
        this.team = piece.team;
        this.position = piece.position;
        this.hasMoved = false;
        this.legalMovements = new Movements();
    }

    // QoL methods for cheking

    isBlank = () => this.team == 2;
    isSameType = (id) => this.id == id;
    isSameTeam = (team) => this.team == team;
    isSamePiece = (position) => this.position == position;

    // Move method

    checkMove(newPosition, board) {
        throw new Error("Movement method not implemented.");
    }
}

export default BasePiece;