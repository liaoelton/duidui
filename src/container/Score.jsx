import React, {Component} from 'react';
import zero from '../img/number/0.png';
import one from '../img/number/1.png';
import two from '../img/number/2.png';
import three from '../img/number/3.png';
import four from '../img/number/4.png';
import five from '../img/number/5.png';
import six from '../img/number/6.png';
import seven from '../img/number/7.png';
import eight from '../img/number/8.png';
import nine from '../img/number/9.png';

const styles = {
  score:{
    position: 'absolute',
    top: '50px'
  }
}
const number = [zero,one,two,three,four,five,six,seven,eight,nine];
class Score extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const score = this.props.score;
    return(
      <div style={styles.score}>
        <img src={number[score/10]}/>
        <img src={number[score%10]}/>
      </div>
    )
  }
}

export default Score;