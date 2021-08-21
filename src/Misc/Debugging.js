class Debugger {
    header = (title) => console.log("\n:>", title, "=> {")
    log = (message) => console.log("\t>", message);

    pieceData = (piece) => (
        this.pieceQuery(this.pieceQuery(piece, "constructor"), "name") +
        " : " +
        (this.pieceQuery(piece, "team") == null ? "neutral"
            : (this.pieceQuery(piece, "team") ? "black"
                : "white"))
    );

    pieceQuery = (object, property) => (
        (object == undefined) ? null
            : (object[property] == undefined) ? null
                : object[property]
    );

    pieceBoardData(board, piece) {
        this.header("Chosen Piece and Board Data");
        this.log(this.pieceData(piece));
        this.log(("Board:", board.get()));
        if (piece != undefined) {
            this.log(("Rank:", (board.get(this.pieceQuery(piece, "position")[0]))));
            this.log(("Piece:", board.get(this.pieceQuery(piece, "position")[0], this.pieceQuery(piece, "position")[1])));
        }
        else {
            this.log("OBJECT DOESN'T HAVE POSITION");
        }
        console.log("}");
    }

    moveData(board, piece, target) {
        this.header("Movement Data");
        this.log(this.pieceData(piece));
        this.log(piece.position);
        this.log("Moving to");
        this.log(this.pieceData(target));
        this.log(target.position);
        this.log(("Status:", piece.checkMove(target, board.get())));
        console.log("}");
    }

    
}

export default Debugger;