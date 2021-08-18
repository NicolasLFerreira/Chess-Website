import React, { Component } from "react";

// The current showing pieces for each team.

const emptyCharacter = <span>&nbsp;</span>;

const piecesBlack = ['♚', '♛', '♜', '♞', '♝', '♟', emptyCharacter];
const piecesWhite = ['♔', '♕', '♖', '♘', '♗', '♙', emptyCharacter];

const pieces = [piecesBlack, piecesWhite];

// BoardPrinter transforms the raw data of the board into JSX objects.
// It's called after the information is already processed and only needs to be rendered

class BoardPrinter extends Component {
    constructor(props) {
        super(props);

        this.board = this.props.board;
    }

    backgroundColor = (position) => (position[0] % 2 == 0 && position[1] % 2 != 0) || (position[0] % 2 != 0 && position[1] % 2 == 0) ? 1 : 2;

    square(piece, position) {
        return (
            <button class={"flex-grow-1 p-2 square-size bgc-" + this.backgroundColor(position) + " " + (piece.team ? "dark" : "light")}>
                <div className="center-text">{pieces[piece.team ? 0 : 1][piece.id]}</div>
            </button>
        );
    }

    render() {
        let boardJSX = new Array(8);
        let current = undefined;

        for (let row = 0; row < 8; row++) {
            current = new Array(8);
            for (let column = 0; column < 8; column++) {
                current[column] = this.square(this.board[row][column], [row, column]);
            }
            boardJSX[row] = (
                <div className="d-flex justify-content-center">
                    {current}
                </div>
            )
        }

        return (
            <div>
                {boardJSX}
            </div>
        );
    }
}

export default BoardPrinter;