import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './NavBar.css'; 

export class NavBar extends Component {
  constructor(props) {
    super(props); 
    this.state={format: "hex"}
  }

  handleChange = (e) => {
    this.setState({ format: e.target.value }); 
    this.props.handleChange(e.target.value); 
  }
  render() {
    const { level, changeLevle } = this.props; 
    const { format } = this.state; 
    return (
      <header className="Navbar">
         <div className="logo">
            <a href="#">reactcolorpicker</a>
         </div>
        <div className="slide-container">
          <span>Level: {level}</span>
            <div className="slider">
              <Slider
                step={100}
                defaultValue={level}
                min={100} max={900}
                onAfterChange={changeLevle} />
            </div> 
        </div>
        <div className="slelect-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default NavBar;
