import React, { Component } from "react";
import Squares from "./Components/Squares";

var pieces = [<span>&nbsp;</span>, 'i', 'N', 'B', 'R', 'Q', 'K']

class App extends Component {
    constructor(props) {
        super(props);
    }

    movePiece(arr, x1, y1, x2, y2) {
        arr[x2][y2] = arr[x1][y2];
        arr[x1][y1] = <span>&nbsp;</span>
    }

    createPiece(piece, team) {
        return {
            "icon": pieces[piece],
            "team": team
        };
    }

    render() {

        var pieceObj = {
            "icon": "",
            "team": ""
        }

        var board = new Array(8);
        var team = true;

        for (let row = 0; row < 8; row++) {
            board[row] = new Array(8);
        }

        for (let row = 0; row < 8; row++) {
            for (let column = 0; column < 8; column++) {
                if (row > 1 && row < 6) {
                    board[row][column] = this.createPiece(0, true);
                }
                else {
                    team = row <= 3;
                    if (row == 0 || row == 7) {
                        if (column == 0 || column == 7) board[row][column] = this.createPiece(4, team);
                        if (column == 1 || column == 6) board[row][column] = this.createPiece(2, team);
                        if (column == 2 || column == 5) board[row][column] = this.createPiece(3, team);
                        if (column == 3) board[row][column] = this.createPiece(5, team);
                        if (column == 4) board[row][column] = this.createPiece(6, team);
                    }
                }
                if (board[row][column] == null) board[row][column] = this.createPiece(1, team);
            }
        }

        var print = [];

        for (let row = 0; row < 8; row++) {
            print.push(<Squares item={board[row]} row={row} />);
        }

        return (
            <div className="App display-1" style={{"width":"auto"}}>
                {print}
            </div>
        );
    }
}

export default App;
