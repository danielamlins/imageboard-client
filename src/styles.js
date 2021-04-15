import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    width: "100%",
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    maxWidth: "70%",
    padding: "5px",
    fontSize: "3em",
    color: "rgba(0,183,255, 1)",
  },
  image: {
    maxWidth: "20%",
    padding: "5px",
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")] : {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  [theme.breakpoints.down("md")] : {
    mainContainer: {
      justifyContent: "center",
      alignItems: "center"
    },
  },
}));
