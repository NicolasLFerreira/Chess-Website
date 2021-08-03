import React, { Component } from "react";

class Squares extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        var row = [];
        var piece = this.props.item;
        for (let column = 0; column < 8; column++) {
            row.push(<button className={((column % 2 == 0 && (this.props.row + 1) % 2 == 0) || (column % 2 != 0 && this.props.row % 2 == 0) ? "bgc-1 " : "bgc-2 ") + (piece[column].team ? "white" : "black")} style={{"width":"25vh"},{"height":"12.5vh"}}>&nbsp;{this.props.item[column].icon}&nbsp;</button>);
        }
        return (
            <div>
                {' '}{row}{' '}
            </div>
        )
    }
}

export default Squares;