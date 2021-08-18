import { assertDeclareOpaqueType } from "@babel/types";
import React, { Component } from "react";
import Board from "./Board";

// The current showing pieces for each team.

var piecesBlack = ['♚', '♛', '♜', '♞', '♝', '♟', <span>&nbsp;</span>]
var piecesWhite = ['♔', '♕', '♖', '♘', '♗', '♙', <span>&nbsp;</span>]

// BoardPrinter transforms the raw data of the board into JSX objects.
// It's called after the information is already processed and only needs to be rendered

class BoardPrinter extends Component {
    constructor(props) {
        super(props);

        this.board = this.props.board;
    }

    square(icon, bgc) {
        return (
            <button class={"flex-grow-1 p-2 square-size bgc-" + bgc}>
                <div className="center-text">{icon}</div>
            </button>
        );
    }

    row(row, team) {
        let row = new Array(8);

        return (
            <div className="d-flex justify-content-center">
                {' '}{row}{' '}
            </div>
        );
    }

    render() {
        let team = undefined;

        for (let row = 0; row < 8; row++) {
            if (row <= 1 || row >= 6)
                team = row < 4;
            else
                team = undefined;
            this.row(this.board[row], row < 4)
        }

        return (
            <div>

            </div>
        );
    }
}

export default BoardPrinter;