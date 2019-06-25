import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Webcam from 'react-webcam';
import Filler from './Filler';
import Score from './Score';
import './Playground.css';
import one from '../img/number/1.png';
import two from '../img/number/2.png';
import three from '../img/number/3.png';
import black_tire from '../img/輪胎/輪胎1.png';
import red_tire from '../img/輪胎/輪胎2.png';
import yellow_tire from '../img/輪胎/輪胎3.png';
import blue_tire from '../img/輪胎/輪胎4.png';
import green_tire from '../img/輪胎/輪胎5.png';

const allTire = [black_tire, red_tire, yellow_tire, blue_tire, green_tire];
const allColor = ['黑色','紅色','黃色','藍色','綠色'];
const styles = {
  playground_container:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  time_container:{
    width: '640px', 
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px'
  },
  time_bar:{
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '10px',
    width: '600px',
    height: '25px',
    borderRadius: '50px',
    border: '1px solid black',
  },
  webcam:{
    position: 'relative',
    margin: '0 auto',
    webkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)',
  },
  require_container:{
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    backgroundColor: 'white'
  },
  circle:{
    position: 'relative',
    border: '3px black solid',
    height: '50px',
    width: '50px',
    borderRadius: '100%',
    margin: '10px',
  },
  text:{
    textAlign: 'center',
    alignItems: 'center',
    width: '100px',
    height: '50px',
    margin: '10px',
    fontSize: '35px',
  }
}
function rand(array){
  let i = array.length;
  const j = Math.floor(Math.random() * i);
  return array[j];
}
var colorText = rand(allColor);

const Color = () => {
  if(colorText === '黑色')
    return <div className='color_circle black'></div>
  else if(colorText === '紅色')
    return <div className='color_circle red'></div>
  else if(colorText === '黃色')
    return <div className='color_circle yellow'></div>
  else if(colorText === '藍色')
    return <div className='color_circle blue'></div>
  else if(colorText === '綠色')
    return <div className='color_circle green'></div>
}

const randomX = [];
const randomY = [];

function randomNumber() {
  let availW = 640 - 60;
  let availH = 480 - 60;
  for (let i = 0; i < 5; i++) {
    let randX = Math.round(Math.random() * availW) + 'px';
    let randY = Math.round(Math.random() * availH) + 'px';
    randomX[i] = randX;
    randomY[i] = randY;
  }
  console.log(randomX);
  console.log(randomY);
}

class PlayGround extends Component{
  constructor(props){
    super(props);

    this.check = this.check.bind(this);
    this.handleNextLevel = this.handleNextLevel.bind(this);
    this.randomImage = this.randomImage.bind(this);

    this.state = {
      level: 1,
      seconds: 5,
      score: 0,
      pass: true,
      color: '',
      nextlevel_hidden: 'hidden',
      tire_hidden: 'hidden',
      countdown_hidden: '',
      three_hidden: '',
      two_hidden: 'hidden',
      one_hidden: 'hidden',
      timebar_mode: 'initial'
    }
  }
  componentWillMount() {
    randomNumber();
  }
  componentDidMount() {
    if(colorText === '黑色') this.setState({color: 'black'});
    else if(colorText === "紅色") this.setState({color: 'red'});
    else if(colorText === "黃色") this.setState({color: 'yellow'});
    else if(colorText === "藍色") this.setState({color: 'blue'});
    else if(colorText === "綠色") this.setState({color: 'green'});
    
    setTimeout(() => this.check(), (this.state.seconds+3) * 1000);
    setTimeout(() => {this.setState({three_hidden: 'hidden', two_hidden: ''})}, 1000);
    setTimeout(() => {this.setState({two_hidden: 'hidden', one_hidden: ''})}, 2000);
    setTimeout(() => {this.setState({one_hidden: 'hidden', countdown_hidden: 'hidden', tire_hidden: ''})}, 3000);
  }
  check() {
    if(this.state.pass === true) {
      this.setState({
        nextlevel_hidden: '',
        timebar_mode: '',
      });
    }
    else {
      
    }
  }

  handleNextLevel() {
    if(this.state.seconds !== 1){
      this.setState({
        level: this.state.level + 1,
        seconds: this.state.seconds - 1,
      })
    }
    else{
      this.setState({level: this.state.level + 1,})
    }
    this.setState({
      nextlevel_hidden: 'hidden', 
      tire_hidden: 'hidden',
      countdown_hidden: '',
      three_hidden: '',
      timebar_mode: 'initial'
    })

    setTimeout(() => this.check(), (this.state.seconds+3) * 1000);
    setTimeout(() => {this.setState({three_hidden: 'hidden', two_hidden: ''})}, 1000);
    setTimeout(() => {this.setState({two_hidden: 'hidden', one_hidden: ''})}, 2000);
    setTimeout(() => {this.setState({one_hidden: 'hidden', countdown_hidden: 'hidden', tire_hidden: ''})}, 3000);
    randomNumber();
    colorText = rand(allColor);
  }

  randomImage(i) {
    const tire_style = {
      position: 'absolute',
      left: randomX[i],
      top: randomY[i],
      width: '60px',
      height: '60px',
    }
    return (
      <img className={`${this.state.tire_hidden}`}src={allTire[i]} style={tire_style}></img>
    )
  }
  render() {
    return (
      <div className="playground_container" style={styles.playground_container}>
        <div className="time_container" style={styles.time_container}>
          <span style={{fontSize: '20px'}}>Time</span>
          <span className="time_bar" style={styles.time_bar}>
            <Filler mode={this.state.timebar_mode} seconds={this.state.seconds}/>
          </span>
        </div>
        <Webcam className="webcam" style={styles.webcam}/>
        <div className="level_container">
          {`Level ${this.state.level}`}
        </div>
        <div className={`countdown_container ${this.state.countdown_hidden}`}>
          <img className={`${this.state.three_hidden}`} src={three}/>
          <img className={`${this.state.two_hidden}`} src={two}/>
          <img className={`${this.state.one_hidden}`} src={one}/>
        </div>
        <div className="tire_picture_container">
          {this.randomImage(0)}
          {this.randomImage(1)}
          {this.randomImage(2)}
          {this.randomImage(3)}
          {this.randomImage(4)}
        </div>
        <div className={`nextlevel_container ${this.state.nextlevel_hidden}`}>
          <Button className="nextlevel_button" color='primary' onClick={this.handleNextLevel}>Next Level!</Button>
        </div>
        <Score score={this.state.score}/>
        
        <div className="require_container" style={styles.require_container}>
          <div className="circle" style={styles.circle}>
            <Color/>
          </div>
          <div className="text" style={styles.text}>{colorText}</div>
        </div>
      </div>
    )
  }
}

export default PlayGround;