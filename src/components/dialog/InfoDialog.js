import { makeStyles } from "@material-ui/core";
import {
  WiSunrise,
  WiSunset,
  WiRaindrop,
  WiStrongWind,
  WiHumidity,
} from "weather-icons-react";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
const InfoDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className={classes.root}>
        <div className={classes.title}>
          Info {props.data !== undefined ? " " + props.data.time : null}
        </div>
        <div className={classes.content}>
          <div className={classes.item}>
            Sunrise
            <div className={classes.icon}>
              <WiSunrise size={30} color="#000" />
            </div>
            {props.data !== undefined ? props.data.sunriseTime : null}
          </div>
          <div className={classes.item}>
            Sunset
            <div className={classes.icon}>
              <WiSunset size={30} color="#000" />
            </div>
            {props.data !== undefined ? " " + props.data.sunsetTime : null}
          </div>
          <div className={classes.item}>
            Precipitation probability
            <div className={classes.icon}>
              <WiRaindrop size={30} color="#000" />
            </div>
            {props.data !== undefined
              ? " " + props.data.precipProbability * 100 + "%"
              : null}
          </div>
          <div>
            Precipitation type
            {props.data !== undefined ? " " + props.data.precipType : null}
          </div>
          <div>
            Min
            {props.data !== undefined
              ? " " + props.data.temperatureMin + "°C"
              : null}
          </div>
          <div>
            Max
            {props.data !== undefined
              ? " " + props.data.temperatureMax + "°C"
              : null}
          </div>
          <div className={classes.item}>
            Humidity
            <div className={classes.icon}>
              <WiHumidity size={30} color="#000" />
            </div>
            {props.data !== undefined
              ? " " + props.data.humidity * 100 + "%"
              : null}
          </div>
          <div className={classes.item}>
            Windspeed
            <div className={classes.icon}>
              <WiStrongWind size={30} color="#000" />
            </div>
            {props.data !== undefined
              ? " " + (props.data.windSpeed * 1.61).toFixed(1) + "KM/H"
              : null}
          </div>
          <div>
            Cloud cover
            {props.data !== undefined
              ? " " + props.data.cloudCover * 100 + "%"
              : null}
          </div>
          <div>
            UV Index
            {props.data !== undefined ? " " + props.data.uvIndex : null}
          </div>
          <div>
            Pressure
            {props.data !== undefined
              ? " " +
                (props.data.pressure * 0.75006375541921).toFixed(2) +
                " mmHg"
              : null}
          </div>
          <div>
            Ozone
            {props.data !== undefined
              ? " " + props.data.ozone + " Dobson"
              : null}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  title: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  content: {
    display: "grid",
    paddingLeft: "5%",
    gridGap: "5px",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "0.1fr 0.1fr 0.1fr",
    alignItems: "center",
  },
  icon: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default InfoDialog;
