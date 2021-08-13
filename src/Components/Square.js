import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <button class={this.props.boardStyle + " flex-grow-1 p-2 square-size"}  onClick={() => this.props.movePiece(this.props.item)}>
                <div className="center-text">{this.props.item.icon}</div>
            </button>
        )
    }
}

export default Square;