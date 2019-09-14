import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorBox.css'; 

class ColorBox extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      copied: false
    }
  }
   changeState = () => {
      this.setState({copied: true}, ()=>{setTimeout(() => {
         this.setState({copied: false})
      }, 1500);})
  }
  render() {
    const { background, name , moreUrl, showLink} = this.props; 
    const { copied } = this.state;
    const isDarker = chroma(background).luminance() <= 0.06; 
    const isWhite = chroma(background).luminance() >= 0.7; 
    return (
      <CopyToClipboard text={background} onCopy={this.changeState}>
        <div style={{ background }} className='colorBox'>
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={isWhite && "dark-text"}>{this.props.background}</p>
           </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarker && "light-text"}>{name}</span>
            </div>
              <button className={`copy-btn ${isWhite && "dark-text"}`}>Copy</button>
          </div>
          {showLink && (<Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isWhite && "dark-text"}`}>More</span>
          </Link>)}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;