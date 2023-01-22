import { base_url, api_key } from "../utils/constants";
import Weather from './Weather';
import Form from './Form';


import React, { Component } from 'react'

 class Data extends Component {

    constructor(props){
        super(props);
        this.state ={
            weatherInfo:{
                city: null,
                temp: null,
                country: null,
                pressure: null,
                sunset: null
            }
        }
    }

    getWeather = city =>{
         fetch(`${base_url}q=${city}&appid=${api_key}&units=metric`)
         .then(response=>response.json())
        .then(data=>this.setState({
            weatherInfo:{
                city: data.name,
                temp: data.main.temp,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
        }))
        
    }

  render() {
    return (
      <div>
          <Form getWeather={this.getWeather}/>
        <Weather weather={this.state.weatherInfo}/>
        dfgksflgjfskgj;GLHJDLGHJK;DFKJGH
      </div>
    )
  }
}


export default Data;
