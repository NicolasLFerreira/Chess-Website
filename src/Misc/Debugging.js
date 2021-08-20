

class Debugger {
    boardData(board, piece) {
        console.log("\nBoard Data => {\n");
        console.log("Data about: " + piece.constructor.name);
        console.log(board.get());
        console.log(board.get(piece.position[0]));
        console.log(board.get(piece.position[0], piece.position[1]));
        console.log("}");
    }

    movementData(board, piece, target) {
        console.log("Movement Data => {");
        console.log("Piece moving: " + piece.constructor.name + " " + (piece.team == undefined ? "neutral" : (piece.team ? "black" : "white")));
        console.log(piece.position);
        console.log("\nTarget: " + target.constructor.name + " " + (target.team == undefined ? "neutral" : (target.team ? "black" : "white")));
        console.log(target.position);
        console.log("\nStatus: " + piece.checkMove(target, board.get()));
        console.log("}");
    }
}

export default Debugger;