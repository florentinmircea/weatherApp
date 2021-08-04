import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const DayComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div>{props.dayName}</div>
      <div>{props.date}</div>
      <div>icon</div>
      <div>{props.temperature}</div>
      <div>{props.condition}</div>
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
