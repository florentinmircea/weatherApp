import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const Title = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant={isSmallScreen === true ? "h5" : "h1"}>
          5-Day Forecast
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9ecef",
    marginLeft: "10%",
    marginRight: "10%",
    boxShadow: "-3px 11px 15px -5px rgba(0,0,0,0)",
  },
  content: {
    paddingTop: "100px",
    paddingBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25px",
      paddingBottom: "25px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },
}));

export default Title;
