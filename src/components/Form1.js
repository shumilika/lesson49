import React, { Component } from 'react';
import { api_key, base_url } from '../utils/constants';

class Form1 extends Component {

    constructor(props){
        super(props);
        // this.handleGetCitySubmit = this.handleGetCitySubmit.blind(this);
        this.state = 
        {
            city: null,
            temp: null
        }
    }

     handleGetCitySubmit=(e)=>{
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        fetch(`${base_url}q=${city}&appid=${api_key}&units=metric`)
        .then(response=>response.json())
        .then(data=> this.setState(
            {
                city: data.name,
                temp:data.main.temp
            }
            ))
        
    }

    render() {
        return (
          <div>
              <form onSubmit={this.handleGetCitySubmit}>
        <input type={"text"} name={'city'} placeholder={'City'} />
        <button type={'submit'}>Get weather</button>
      </form>
      <h2>Location: {this.state.city}</h2>
      <h2>Tempeture:{this.state.temp}</h2>
          </div>
        );
    }
}

export default Form1;