import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const DayComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div>{props.data.time.substr(0, 3)}</div>
      <div>{props.data.time.substr(3, 10)}</div>
      <div>{props.data.icon}</div>
      <div>
        {"Min:" +
          props.data.temperatureMin +
          " Max:" +
          props.data.temperatureMax}
      </div>
      <div>{props.data.summary}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    padding: "5px 5px 5px 5px",
    border: "2px solid #ededed",
    gridGap: "5px",
  },
}));

export default DayComponent;
