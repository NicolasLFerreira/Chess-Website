class Debugger {
    header = (title) => console.log("\n:>", title, "=> {")
    log = (message) => console.log("\t>", message);

    pieceData = (piece) => (
        "Piece: " + this.pieceQuery(this.pieceQuery(piece, "constructor"), "name") +
        " : " +
        (this.pieceQuery(piece, "team") == undefined ? "neutral"
            : (this.pieceQuery(piece, "team") ? "black"
                : "white"))
    );

    boardData(board, piece) {
        this.header("Board Data");
        this.log(this.pieceData(piece));
        this.log(board.get());
        if (piece != undefined) {
            this.log(board.get(this.pieceQuery(piece, "position")[0]));
            this.log(board.get(this.pieceQuery(piece, "position")[0], this.pieceQuery(piece, "position")[1]));
        }
        else {
            this.log("OBJECT DOESN'T HAVE POSITION");
        }
        console.log("}");
    }

    movementData(board, piece, target) {
        this.header("Movement Data");
        this.log(this.pieceData(piece));
        this.log(piece.position);
        this.log(this.pieceData(target));
        this.log(target.position);
        this.log(("Status:", piece.checkMove(target, board.get())));
        console.log("}");
    }

    pieceQuery = (object, property) => (
        (object == undefined) ? "N/A"
            : (object[property] == undefined) ? "N/A"
                : object[property]
    );
}

export default Debugger;