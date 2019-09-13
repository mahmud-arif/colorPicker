import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';
import './NavBar.css'; 

export class NavBar extends Component {
  constructor(props) {
    super(props); 
    this.state={format: "hex", open: false}
  }

  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true }); 
    this.props.handleChange(e.target.value); 
  }

  onCloseHandler = () => {
    this.setState({open: false})
  }
  render() {
    const { level, changeLevle, showLevel } = this.props; 
    const { format } = this.state; 
    return (
      <header className="Navbar">
         <div className="logo">
            <Link to="/">reactcolorpicker</Link>
         </div>
        {showLevel && (<div className="slide-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              step={100}
              defaultValue={level}
              min={100} max={900}
              onAfterChange={changeLevle} />
          </div>
        </div>)}
        <div className="slelect-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Change</span>}
          ContentProps={
            {
              "aria-describedby": "message-id"
            }
          }
          onClose={this.onCloseHandler}
          action={[
            <IconButton
              onClick={this.onCloseHandler}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default NavBar;
