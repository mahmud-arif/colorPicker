import React, { Component } from 'react';
import Navbar from './NavBar'; 
import ColorBox from './colorBox';
import './palette.css'; 

class Palette extends Component {
  constructor(props) {
    super(props); 
    this.state = {level : 500}
  }
  changeLevle = level => this.setState({ level }); 
  render() {
    const { colors } = this.props.palette; 
    const { level } = this.state; 
    const colorBoxes = colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name}/>
    })
    return (
      <div className="palette">
        <Navbar level={level} changeLevle={this.changeLevle}/>
        <div className='palette-colors'> {colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
