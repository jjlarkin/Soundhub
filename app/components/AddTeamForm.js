import React from 'react';
import base from './base'

class AddTeamForm extends React.Component {

   constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      teamName:"",
      score:0,
      teams:[]
    };
  

  }

  handleSubmit(e) {
  e.preventDefault();
  const teamsRef = base.database().ref('teams');
  const team = {
    score: this.state.score,
    teamName: this.state.teamName
  }
  teamsRef.push(team);
  this.setState({
    score: '',
    TeamName: ''
  });
}

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

componentDidMount() {
  let teamsRef = base.database().ref('teams');
  teamsRef.on('value', (snapshot) => {
    let teams = snapshot.val();
    let newState = [];
    for (let team in teams) {
      newState.push({
        id: team,
        teamName: teams[team].teamName,
        score: teams[team].score
      });
    }
    this.setState({
      teams: newState
    });
  });
}

render() {
    return (
      <div className='app'>
        <div className='head'>
            <div className='wrapper'>
              <h1>SCOREBOARD</h1>
              
            </div>
        </div>
        <div className='container'>
          <section className='add-team'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="teamName" placeholder="Team Coco?" onChange={this.handleChange} value={this.state.teamName} />
                <input type="text" name="score" placeholder="Team Score" onChange={this.handleChange} value={this.state.score}/>
                <button>Add Team</button>
              </form>
          </section>
          <section className='display-team'>
            <div className='wrapper'>
              <ul>
              {this.state.teams.map((team) => {
        return (
          <li key={team.id}>
            <h3>{team.teamName}</h3>
            <p>SCORE: {team.score}</p>
          </li>
        )
      })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
 
}

export default AddTeamForm;





