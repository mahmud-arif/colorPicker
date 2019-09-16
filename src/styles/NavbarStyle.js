export default {
  Navbar: {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "height": "6vh"
  },
  logo: {
    "marginRight": "15px",
    "padding": "0 13px",
    "fontSize": "1rem",
    "backgroundColor": "#eceff1",
    "fontFamily": "Roboto",
    "height": "100%",
    "display": "flex",
    "alignItems": "center",
    "& a": {
      "textDecoration": "none",
      "color": "black"
    }
  },
  slider: {
    "width": "340px",
    "margin": "0 10px",
    "display": "inline-block",
    "cursor": "pointer",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active": {
      "backgroundColor": "green",
      "outline": "none",
      "border": "2px solid green",
      "boxShadow": "none",
      "width": "13px",
      "height": "13px",
      "marginLeft": "-2px",
      "marginTop": "-3px"
    }
  },
  slelectContainer: {
    "marginLeft": "auto",
    "marginRight": "1rem"
  }
}
