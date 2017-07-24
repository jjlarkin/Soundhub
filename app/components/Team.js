import React from 'react';


class Team extends React.Component {
  render() {
    const { details, index } = this.props;
    const HighScore = details.score === 0;
    
    return (
      <li className="dopeTeam">
        
        <h3 className="Team-name">
          {details.name}
         
        </h3>
        <p>{details.score}<p/>
        
      </li>
    )
  }
}

Team.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
 
};

export default Team;
