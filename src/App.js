import React, { Component } from "react";
import Rows from "./Components/Row";
import BoardManagement from "./Board/BoardManagement";

const boardManager = new BoardManagement();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: boardManager.buildBoard(),
            turn: true,
            selectedPiece: undefined
        }
    }

    selectPieces = (piece) => {
        console.log(piece.id)
        this.setState(() => {
            if (this.state.selectedPiece == undefined)
                return piece.id[0] == 'S' || piece.team != this.state.turn ? null : { selectedPiece: piece }
            else if (this.state.selectedTarget == undefined)
                this.movePiece(piece);
        });
    }

    movePiece = (selectedTarget) => {
        this.setState(prevState => {
            if (this.state.selectedPiece != undefined) {

                let moving = this.state.selectedPiece;
                let target = selectedTarget;
                let newBoard = [...prevState.board];

                newBoard[moving.pos[0]][moving.pos[1]] = boardManager.createPiece(6, moving.pos[0] >= 4, moving.pos);
                moving.pos = target.pos;
                newBoard[moving.pos[0]][moving.pos[1]] = moving;

                return {
                    board: newBoard,
                    selectedPiece: undefined,
                    selectedTarget: undefined,
                    turn: !this.state.turn
                }
            }
        });
    }

    menu() {
        return (
            <div>
                <p className="display-3">{this.state.turn ? "White" : "Black"} to play</p>
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