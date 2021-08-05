import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { WiRaindrops, WiDaySunny, WiDayCloudyHigh } from "weather-icons-react";

const DayComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div>
        <Typography variant={isSmallScreen === true ? "h5" : "h4"}>
          {props.data.time.substr(0, 3)}
        </Typography>
      </div>
      <div>
        <Typography variant={isSmallScreen === true ? "h6" : "h6"}>
          {props.data.time.substr(3, 10)}
        </Typography>
      </div>
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
        <Typography variant={isSmallScreen === true ? "h6" : "h6"}>
          {"Min:" +
            props.data.temperatureMin +
            "°C Max:" +
            props.data.temperatureMax +
            "°C"}
        </Typography>
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
