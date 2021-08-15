import React, { Component } from "react";
import Square from "./Square";

class Row extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        var row = [];
        var piece = this.props.item;
        var boardStyle;
        for (let column = 0; column < 8; column++) {
            boardStyle = (((column % 2 == 0 && (this.props.row + 1) % 2 == 0) || (column % 2 != 0 && this.props.row % 2 == 0) ? "bgc-1 " : "bgc-2 ") + (piece[column].team ? "light" : "dark"));

            row.push(<Square
                movePiece={() => this.props.movePiece(piece[column])}
                item={piece[column]}
                boardStyle={boardStyle}
            />
            )
        }
        return (
            <div className="d-flex justify-content-center">
                {' '}{row}{' '}
            </div>
        )
    }
}

export default Row;