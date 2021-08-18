import React, { Component } from "react";
import BoardManager from "./BoardManagement/BoardManager";

class App extends Component {
    constructor(props) {
        super(props);

        this.board = new BoardManager();

        this.state = {
        }
    }

    menu() {
        return (
            <div>
                <p className="display-3">{this.state.turn ? "White" : "Black"} to play</p>
            </div>
        )
    }

    render() {
        return (
            <div className="App display-3">
                <div className="row">
                    {this.menu()}
                </div>
                <div className="d-flex flex-row">
                    <div className="flex-column flex-fill mobile-show"></div>
                    <div className="flex-column flex-fill center-text">
                        {this.board.printBoard()}
                    </div>
                    <div className="flex-column flex-fill mobile-show"></div>
                </div>
            </div>
        );
    }
}

export default App;