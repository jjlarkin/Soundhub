import React from 'react';


class Team extends React.Component {

   render() {
    const { details, index } = this.props;
    // const HighScore = details.score === 0;
    
    return (
        <li className="dopeTeam">
        
        <h3 className="Team-name">  {details.name}  </h3>

        <p>{details.score}</p>
        
      </li>

    )
  }

}

export default Team;
