import React from "react";
import { base_url, api_key } from "../utils/constants";

function Form(props){

    function handleGetCitySubmit(e){
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
      props.getWeather(city);
    }

    return(
      <form onSubmit={handleGetCitySubmit}>
        <input type={"text"} name={'city'} placeholder={'City'} />
        <button type={'submit'}>Get weather</button>
      </form>
    )
}

export default Form