class Debugger {
    boardData(board, piece) {
        console.log("\nBoard Data => {\n");
        console.log("Data about: " + this.pieceQuery(this.pieceQuery(piece, "constructor"), "name") + " " + (this.pieceQuery(piece, "team") == undefined ? "neutral" : (this.pieceQuery(piece, "team") ? "black" : "white")));
        console.log(board.get());
        console.log(board.get(this.pieceQuery(piece, "position")[0]));
        console.log(board.get(this.pieceQuery(piece, "position")[0], this.pieceQuery(piece, "position")[1]));
        console.log("}");
    }

    movementData(board, piece, target) {
        console.log("Movement Data => {");
        console.log("Piece moving: " + this.pieceQuery(this.pieceQuery(piece, "constructor"), "name") + " " + (this.pieceQuery(piece, "team") == undefined ? "neutral" : (this.pieceQuery(piece, "team") ? "black" : "white")));
        console.log(piece.position);
        console.log("\nTarget: " + this.pieceQuery(this.pieceQuery(target, "constructor"), "name") + " " + (this.pieceQuery(target, "team") == undefined ? "neutral" : (this.pieceQuery(target, "team") ? "black" : "white")));
        console.log(target.position);
        console.log("\nStatus: " + piece.checkMove(target, board.get()));
        console.log("}");
    }

    pieceQuery = (object, property) => (
        (
            object == null ||
            object == undefined
        )
            ? "N/A"
            : (
                object.hasOwnProperty(property) ?
                    object[property] : "N/A"
            )
    );
}

export default Debugger;