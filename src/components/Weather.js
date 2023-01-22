import React from "react";

function Weather(props){

    return(
        <div>
            <p>Location:{props.weather.country}, {props.weather.city}</p>
            <p>Temp:{props.weather.temp}</p>
            <p>Pressure:{props.weather.pressure}</p>
            <p>Sunset:{props.weather.sunset}</p>
        </div>
    )
}

export default Weather