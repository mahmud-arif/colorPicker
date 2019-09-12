import React, { Component } from 'react';
import Navbar from './NavBar'; 
import ColorBox from './colorBox';
import './palette.css'; 

class Palette extends Component {
  constructor(props) {
    super(props); 
    this.state = {level : 500, format: "hex"}
  }
  changeLevle = level => this.setState({ level }); 
  changeFrmat = (value) => {
    this.setState({format: value})
  }
  render() {
    const { colors, PaletteName, emoji, id } = this.props.palette; 
    const { level, format } = this.state; 
    const colorBoxes = colors[level].map(color => {
      return <ColorBox
        background={color[format]}
        name={color.name} key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    })
    return (
      <div className="palette">
        <Navbar level={level} changeLevle={this.changeLevle} handleChange={this.changeFrmat}/>
        <div className='palette-colors'> {colorBoxes}</div>
        <footer className='Palette-footer'>
          {PaletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
