import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Input} from 'reactstrap';

const styles = {
  name: {
    fontSize: '30px',
    width: '300px'
  },
  information_container:{
    height: '600px',
    width: '600px',
    margin: '0 auto',
  },
  information_inner_container:{
    marginTop: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name_container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button:{
    marginTop: '50px',
  }
}
class Start extends Component{
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.state = {
      playerName: '',
    };
  }
  onChangeName(e) {
    this.setState({playerName: e.target.value});
  }
  render() {
    return (
      <div className="information_container" style={styles.information_container}>
        <div className="information_inner_container" style={styles.information_inner_container}>
          <div className="name_container" style={styles.name_container}>
            <span className="name" style={styles.name}>Your Name:</span>
            <Input 
              type="text" 
              placeholder="Enter Your Name..."
              value={this.state.playerName}
              onChange={this.onChangeName}
              />
          </div>
          <div className="button" style={styles.button}>
            <NavLink to="/playground">
              <Button color="danger" size="lg">START!</Button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  };
}

export default Start;