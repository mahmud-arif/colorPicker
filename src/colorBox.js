import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'; 
import { withStyles } from '@material-ui/styles';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorBox.css'; 
import {Opacity} from '@material-ui/icons'

const styles = {
  colorBox: {
      width: "20%",
      height: props=>(props.showLink ? "25%": "50%"),
      margin: "0 auto",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      marginBottom: "-3.5px",
     "&:hover button": {
        opacity: 1, 
      }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white", 
  }, 
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  }, 
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  }, 
  copyBtn: {
    width: "80px",
    height: "25px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: ".8rem",
    lineHeight: "30px",
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    textTecoration: "none",
    textTlign: "center", 
    opacity: 0,
  }
}

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
    const { background, name , moreUrl, showLink, classes} = this.props; 
    const { copied } = this.state;
    const isDarker = chroma(background).luminance() <= 0.06;
    const isWhite = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeState}>
        <div style={{ background }} className={classes.colorBox}>
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
           </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
              <button className={classes.copyBtn}>Copy</button>
          </div>
          {showLink && (<Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>)}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);