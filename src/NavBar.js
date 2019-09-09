import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'; 

export class NavBar extends Component {
  render() {
    const { level, changeLevle } = this.props; 
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
      </header>
    );
  }
}

export default NavBar;
