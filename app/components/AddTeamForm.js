import React from 'react';

class AddTeamForm extends React.Component {
  createTeam(event) {
    event.preventDefault();
    console.log('adding a team');
    const team = {
      teamName: this.name.value,
      score: this.score.value,

    }
    this.props.addteam(team);
    this.teamForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.teamForm = input} className="team-edit" onSubmit={(e) => this.createTeam(e)}>
          <button type="submit">+ Add Team</button>
          <input ref={(input) => this.name = input} type="text" placeholder="Team Name" />
        <input ref={(input) => this.score = input} type="text" placeholder="Team Score" />


      <form/>
    )
  }
}

AddTeamForm.propTypes = {
  addTeam: React.PropTypes.func.isRequired
}

export default AddTeamForm;
