import React, { Component } from "react";
import Rows from "./Components/Row";

function download(content, fileName, contentType) {
    content = JSON.stringify(content);
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

var pieces = ['P', 'R', 'N', 'B', 'Q', 'K', '\0']

// var pieceObj = {
//     "icon": "",
//     "team": "",
//     "id": "",
//     "pos": ["", ""]
// };

class App extends Component {
    constructor(props) {
        super(props);

        var board = new Array(8);
        var team = true;

        for (let row = 0; row < 8; row++) {
            board[row] = new Array(8);

            for (let column = 0; column < 8; column++) {
                var position = row + "" + column;

                if (row > 1 && row < 6) board[row][column] = this.createPiece(6, team, position);
                else {
                    team = row >= 4;

                    if (row == 0 || row == 7) {
                        for (let i = 0; i < 3; i++) if (column == i || column == 7 - i) board[row][column] = this.createPiece(i + 1, team, position);
                        if (column == 4) board[row][column] = this.createPiece(5, team, position);
                        if (column == 3) board[row][column] = this.createPiece(4, team, position);
                    }
                }

                if (board[row][column] == null) board[row][column] = this.createPiece(0, team, position);
            }
        }

        this.state = {
            board: board,
            turn: true,
            selectedPiece: undefined,
            selectedTarget: undefined
        }
    }

    createPiece(index, team, pos) {
        return {
            "icon": pieces[index],
            "team": team,
            "id": (index == 6 ? 'S' : pieces[index]) + (team ? 0 : 1) + pos,
            "pos": pos
        }
    }

    selectPieces = (piece) => {
        this.setState(() => {
            if (this.state.selectedPiece == undefined)
                return { selectedPiece: piece };
            else if (this.state.selectedTarget == undefined)
                return { selectedTarget: piece };
        });
    }

    movePiece = () => {
        this.setState(prevState => {
            if (this.state.selectedPiece != undefined && this.state.selectedTarget != undefined) {

                let moving = this.state.selectedPiece;
                let target = this.state.selectedTarget;
                let newBoard = [...prevState.board];

                console.log(moving);
                console.log(target);

                newBoard[moving.pos[0]][moving.pos[1]] = this.createPiece(6, moving.pos[0] >= 4, moving.pos);
                moving.pos = target.pos;
                newBoard[moving.pos[0]][moving.pos[1]] = moving;

                return {
                    board: newBoard,
                    selectedPiece: undefined,
                    selectedTarget: undefined
                }
            }
        });
    }

    menu() {
        let piece = this.state.selectedPiece;
        let target = this.state.selectedTarget;

        return (
            <div>
                <button onClick={() => this.movePiece()}>Move Piece</button>
                <button onClick={() => download(this.state.board, 'json.txt', 'text/plain')}>Download board data</button>
                <p className="display-6">
                    {this.state.selectedPiece != undefined ? "(" + piece.pos[0] + ", " + piece.pos[1] + ")" : "(?, ?)"} -{'>'} {this.state.selectedTarget != undefined ? "(" + target.pos[0] + ", " + target.pos[1] + ")" : "(?, ?)"}
                </p>
            </div>
        )
    }



    render() {
        var print = [];

        for (let row = 0; row < 8; row++) {
            print.push(<Rows item={this.state.board[row]} row={row} movePiece={(piece) => this.selectPieces(piece)} />);
        }

        return (
            <div className="App display-1 row">
                <div className="col">
                    {this.menu()}
                </div>
                <div className="col-6">
                    {print}
                </div>
                <div className="col"></div>
            </div>
        );
    }
}

export default App;