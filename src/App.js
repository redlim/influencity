import React, {Component} from 'react';
import WeatherWidget from './components/WeatherWidget'
import * as Api from './api'
import './App.css'
export default class App extends Component {

    state= {
        currentTemp: '---',
        currentCity: '---'
    };

    componentDidMount() {
        Api.getWeatherByName('Almería').then((response)=>{
            this.setState({currentTemp: response.main.temp, currentCity: response.name})
        })
    }

    render() {
        const {currentTemp, currentCity } = this.state;
        return (
            <div className="App">
                <WeatherWidget city={currentCity} temp={currentTemp}/>
            </div>
        );
    }
}

