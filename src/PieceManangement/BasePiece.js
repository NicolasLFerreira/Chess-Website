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
        this.id;
        this.team;
        this.pos;
    }
}