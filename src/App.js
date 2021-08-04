import React, { Component } from "react";
import Rows from "./Components/Row";

var pieces = ['P', 'R', 'N', 'B', 'Q', 'K', <span>&nbsp;</span>]

// var pieceObj = {
//     "icon": "",
//     "team": "",
//     "id": ""
// };

class App extends Component {
    constructor(props) {
        super(props);

        var board = new Array(8);
        var team = true;

        for (let row = 0; row < 8; row++) {
            board[row] = new Array(8);

            for (let column = 0; column < 8; column++) {
                var id = row + "" + column;

                if (row > 1 && row < 6) board[row][column] = this.createPiece(6, team, id);
                else {
                    team = row >= 4;

                    if (row == 0 || row == 7) {
                        for (let i = 0; i < 3; i++) if (column == i || column == 7 - i) board[row][column] = this.createPiece(i + 1, team, id);
                        if (column == 4) board[row][column] = this.createPiece(5, team, id);
                        if (column == 3) board[row][column] = this.createPiece(4, team, id);
                    }
                }
                if (board[row][column] == null) board[row][column] = this.createPiece(0, team, id);
            }
        }

        this.state = {
            board: board,
            turn: true,
            selectedPiece: undefined,
            selectedSquare: undefined
        }
    }

    createPiece(piece, team, pos) {
        return {
            "icon": pieces[piece],
            "team": team,
            "id": (piece == 6 ? 'S' : pieces[piece]) + (team ? 0 : 1) + pos
        };
    }

    movePiece = () => {
        var piece = this.state.selectedPiece;
        var square = this.state.selectedSquare;

        if (square == undefined || piece == undefined || piece.id[0] == 'S') return;

        var board = this.state.board;

        board[piece.id[2]][piece.id[3]] = this.createPiece(6, true);
        board[3][3] = piece;

        this.setState(() => {
            return {
                board: board,
                selectPiece: undefined,
                selectSquare: undefined
            }
        });
    }

    render() {
        this.movePiece();
        var print = [];

        for (let row = 0; row < 8; row++) {
            print.push(<Rows item={this.state.board[row]} row={row} movePiece={(piece) => this.movePiece(piece)} />);
        }

        return (
            <div className="App display-1 row">
                <div className=" col ">
                    {print}
                </div>
                <div className="col">
                    {this.state.selectedPiece != undefined ? this.state.selectedPiece.icon : "None"}
                </div>
            </div>
        );
    }
}

export default App;
