export default {
  palette: {
    height: "100vh",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    Opacity: 1,
    backgroundColor: "black",
    "& a": {
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
      color: "white",
      textTransform: "uppercase",
      border: "none",
      textTecoration: "none",
      textTlign: "center",
      opacity: 1,
      textDecoration: "none",
      textAlign: "center"
    }
  }

}