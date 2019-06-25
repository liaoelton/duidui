import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';

const styles = {
  scoreboard_container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  score:{
    border: '1px black solid',
    background: 'white',
    width: '25%',
    height: '75%',
    margin: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreboard:{
    border: '1px black solid',
    background: 'white',
    width: '25%',
    height: '75%',
    margin: '5%',
  },
  subtitle:{
    fontSize: '40px'
  },
  score_number:{
    fontSize: '100px',
    marginBottom: '20px',
  }
}
class Scoreboard extends Component {
  render() {
    return(
      <div className="scoreboard_container" style={styles.scoreboard_container}>
        <div className="score" style={styles.score}>
          <div className="subtitle" style={styles.subtitle}>Your Score</div>
          <div className="score_number" style={styles.score_number}>10</div>
          <NavLink to="/playground">
            <Button color="primary">Restart!</Button>
          </NavLink>
        </div>
        <div className="scoreboard" style={styles.scoreboard}>
          <div className="subtitle" style={styles.subtitle}>Leaderboard</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard;