import React from 'react';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: "Hello",
            score: 10
        };
    }

    render () {
        return (
            
            <div className="results">

                <h1>{this.state.teamName}</h1>
                <p>{this.state.score}</p>

            </div>
        );
    }

}

export default Scoreboard