import React, { Component } from "react";
import Rows from "./Row";
import BoardManagement from "./BoardManagement";

const boardManager = new BoardManagement();

class Board extends Component {
    constructor(props) {
        super(props);

        this.pieceToMove = undefined;

        this.state = {
            board: boardManager.buildBoard(),
            turn: true
        }
    }

    selectPiece = (piece) => {
        if (this.pieceToMove == undefined)
            this.pieceToMove = piece.id[0] == 'S' || piece.team != this.state.turn ? undefined : piece;
        else if (piece.team != this.state.turn) this.movePiece(piece);
    }

    movePiece = (selectedTarget) => {
        this.setState(prevState => {
            if (this.pieceToMove != undefined) {

                let moving = this.pieceToMove;
                let target = selectedTarget;
                let newBoard = [...prevState.board];

                newBoard[moving.pos[0]][moving.pos[1]] = boardManager.createPiece(6, 2, moving.pos);
                moving.pos = target.pos;
                newBoard[moving.pos[0]][moving.pos[1]] = moving;

                this.pieceToMove = undefined;

                return {
                    board: newBoard,
                    turn: !this.state.turn
                }
            }
        });
    }

    render() {
        var print = [];

        for (let row = 0; row < 8; row++) {
            print.push(<Rows item={this.state.board[row]} row={row} movePiece={(piece) => this.selectPiece(piece)} />);
        }

        console.log(this.state.board)

        return (
            <div>
                {print}
            </div>
        )
    }
}

export default Board;