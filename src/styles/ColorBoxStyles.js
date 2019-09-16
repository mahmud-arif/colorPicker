import chroma from 'chroma-js';
export default {
  colorBox: {
    width: "20%",
    height: props => (props.showLink ? "25%" : "50%"),
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
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: "0",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    color: "black",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform .6s ease-in-out",
    transform: "scale(.1)",
  },
  overlayShow: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, .2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      fontSize: "4rem",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    }
  },
  msgShow: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all .3s ease-in-out",
    transitionDelay: ".3s",
  }

}