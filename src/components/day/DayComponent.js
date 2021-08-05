import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { WiRaindrops, WiDaySunny, WiDayCloudyHigh } from "weather-icons-react";

const DayComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div>{props.data.time.substr(0, 3)}</div>
      <div>{props.data.time.substr(3, 10)}</div>
      <div>
        {props.data.icon === "rain" ? (
          <WiRaindrops size={100} color="#000" />
        ) : null}
        {props.data.icon === "clear-day" ? (
          <WiDaySunny size={100} color="#000" />
        ) : null}
        {props.data.icon === "partly-cloudy-day" ? (
          <WiDayCloudyHigh size={100} color="#000" />
        ) : null}
      </div>
      <div>
        {"Min:" +
          props.data.temperatureMin +
          "°C Max:" +
          props.data.temperatureMax +
          "°C"}
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
