import React, { Component } from "react";
import Rows from "./Components/Row";
import PieceManagement from "./Board/PieceManagement";
import BoardManagement from "./Board/BoardManagement";

const pieceManager = new PieceManagement();
const boardManager = new BoardManagement();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: boardboardManager.buildBoard(),
            turn: true,
            selectedPiece: undefined,
            selectedTarget: undefined
        }
    }

    selectPieces = (piece) => {
        console.log(piece.id)
        this.setState(() => {
            if (this.state.selectedPiece == undefined)
                return piece.id[0] == 'S' ? null : { selectedPiece: piece }
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

                newBoard[moving.pos[0]][moving.pos[1]] = pieceManager.createPiece(6, moving.pos[0] >= 4, moving.pos);
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