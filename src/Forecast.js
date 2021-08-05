import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import DayComponent from "./DayComponent";
import { getWeather } from "./utils";
import { res } from "./mockdata";

const Forecast = () => {
  const [city, setCity] = useState("Odoreu");
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [forecast, setForecast] = useState([]);
  const [actualData, setActualData] = useState([]);
  let id = 0;

  useEffect(() => {
    setForecast([]);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      getWeatherData(
        position.coords.latitude.toString(),
        position.coords.longitude.toString()
      );
    });
  }, []);

  const getWeatherData = async (latitude, longitude) => {
    // const response = await getWeather(latitude, longitude);
    // console.log(response);
    let aux;
    forecast.length = 0;
    for (let i = 0; i < 5; i++) {
      forecast.push(res.data.forecast[i]);
    }
    for (let i = 0; i < 5; i++) {
      aux = "";
      aux = forecast[i];
      var readableDate = new Date(parseInt(aux.time) * 1000);
      console.log(readableDate.toString());
      aux.time = readableDate.toString().substr(0, 10);
      aux.temperatureMin =
        Math.round((aux.temperatureMin - 32) * 0.5556 * 10) / 10;
      aux.temperatureMax =
        Math.round((aux.temperatureMax - 32) * 0.5556 * 10) / 10;
      forecast[i] = aux;
    }
    setActualData(forecast);
    console.log(forecast);
  };

  const daysElements = actualData?.map((item) => (
    <DayComponent data={item} key={id++} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.location}>
        <Typography variant={isSmallScreen === true ? "h6" : "h2"}>
          {city}
        </Typography>
      </div>
      <div className={classes.days}>
        {daysElements}
        {/* <DayComponent
          dayName="Monday"
          temperature="23"
          date="August 2"
          condition="clear sky"
        />
        <DayComponent
          dayName="Tuesday"
          temperature="25"
          date="August 2"
          condition="clear sky"
        />
        <DayComponent
          dayName="Wednesday"
          temperature="27"
          date="August 2"
          condition="clear sky"
        />
        <DayComponent
          dayName="Thursday"
          temperature="29"
          date="August 2"
          condition="clear sky"
        />
        <DayComponent
          dayName="Friday"
          temperature="20"
          date="August 2"
          condition="clear sky"
        /> */}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#e9ecef",
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
