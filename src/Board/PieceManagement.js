var pieces = ['P', 'R', 'N', 'B', 'Q', 'K', '\0']

class PieceManagement {


    // Returns the object of a new piece
    createPiece(index, team, pos) {
        return {
            "icon": pieces[index],
            "team": team,
            "id": (index == 6 ? 'S' : pieces[index]) + (team ? 0 : 1) + pos,
            "pos": pos
        }
    }
}

export default PieceManagement;

// var pieceObj = {
//     "icon": "",
//     "team": "",
//     "id": "",
//     "pos": ["", ""]
// };