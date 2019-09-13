import React, { Component } from 'react';
import Navbar from './NavBar'; 
import PaletteFooter from './PaletteFooter'
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
        showLink={true}
      />
    })
    return (
      <div className="palette">
        <Navbar level={level} changeLevle={this.changeLevle} handleChange={this.changeFrmat} showLevel={true}/>
        <div className='palette-colors'>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={PaletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default Palette;
