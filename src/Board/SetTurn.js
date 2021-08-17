import React from "react";
import { Helmet } from 'react-helmet'

class SetTurn extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{this.props.turn}</title>
                </Helmet>
                ...
            </>
        )
    }
}

export default SetTurn;