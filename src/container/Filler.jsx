import React, {Component} from 'react';
import './Filler.css';

class Filler extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let second = this.props.seconds.toString() + 's';
    var filler = {
      position: 'absolute',
      background: 'red',
      left: '0%',
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      animationDelay: '3s',
      animationDuration: second,
      animationFillMode: 'forwards',
    }
    return <div id="filler" className={`filler ${this.props.mode}`} style={filler}></div>
  }
}

export default Filler;