import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import DayComponent from "../day/DayComponent";
import { getWeather } from "../../api/api";
import { res } from "../../api/mockdata";
import InfoDialog from "../dialog/InfoDialog";

const Forecast = () => {
  const [city, setCity] = useState("");
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [forecast, setForecast] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickOpen = (val) => {
    setOpen(true);
    setValue(val);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = () => {
    // setForecast([]);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCity(
          "Coordinates: " +
            position.coords.latitude.toFixed(2).toString() +
            " , " +
            position.coords.longitude.toFixed(2).toString()
        );
        getWeatherData(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        );
      });
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    const response = await getWeather(latitude, longitude);
    // console.log(response);
    let aux;
    forecast.length = 0;
    for (let i = 0; i < 5; i++) {
      forecast.push(response.data.forecast[i]);
    }
    for (let i = 0; i < 5; i++) {
      aux = "";
      aux = forecast[i];
      var readableDate = new Date(parseInt(aux.time) * 1000);
      aux.time = readableDate.toString().substr(0, 10);
      var readableSunrise = new Date(parseInt(aux.sunriseTime) * 1000);
      var hours = readableSunrise.getHours();
      var minutes = "0" + readableSunrise.getMinutes();
      aux.sunriseTime = hours + ":" + minutes.substr(-2);
      var readableSunset = new Date(parseInt(aux.sunsetTime) * 1000);
      var hours = readableSunset.getHours();
      var minutes = "0" + readableSunset.getMinutes();
      aux.sunsetTime = hours + ":" + minutes.substr(-2);
      aux.temperatureMin =
        Math.round((aux.temperatureMin - 32) * 0.5556 * 10) / 10;
      aux.temperatureMax =
        Math.round((aux.temperatureMax - 32) * 0.5556 * 10) / 10;
      forecast[i] = aux;
    }
    setActualData(forecast);
    // console.log(forecast);
  };

  const daysElements = actualData?.map((item, index) => (
    <DayComponent
      data={item}
      key={index}
      onClick={() => handleClickOpen(index)}
    />
  ));

  const errorDiv = (
    <div>
      <Typography variant={isSmallScreen === true ? "h5" : "h4"}>
        {
          "If you are seeing this, your browser does not have access to your location."
        }
      </Typography>
      <br />
      <Typography variant={isSmallScreen === true ? "h5" : "h4"}>
        {
          "If you are using iOS this can be solved by going into Settings > Privacy > Location Services > Safari > Ask next time."
        }
      </Typography>
      <br />
      <Typography variant={isSmallScreen === true ? "h5" : "h4"}>
        {
          "If you are using Android this can be solved by going into Settings > Apps > Browser App > Permissions > Location > Ask everytime."
        }
      </Typography>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.location}>
        <Typography variant={isSmallScreen === true ? "h6" : "h2"}>
          {city}
        </Typography>
      </div>
      <div className={classes.days}>
        {daysElements.length !== 0 ? daysElements : errorDiv}
        <InfoDialog
          data={actualData[value]}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "100px",
    boxShadow: "-3px 11px 15px -5px rgba(0,0,0,0)",
    [theme.breakpoints.up("md")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
    },
  },
  location: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  days: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
      gridTemplateColumns: "auto",
    },
    gridGap: "20px",
  },
}));

export default Forecast;
