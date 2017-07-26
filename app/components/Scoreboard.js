import React from 'react';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
       scores: [
                {
                    teamName: 'team1',
                    score: 16,
                },
                {
                    teamName: 'team2',
                    score: 18,
                },
                {
                    teamName: 'team3',
                    score: 12,
                },
                {
                    teamName: 'team4',
                    score: 10,
                },
                {
                    teamName: 'team5',
                    score: 14,
                }
            ]
        }
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