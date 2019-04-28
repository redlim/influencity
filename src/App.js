import React, {Component} from 'react';
import WeatherWidget from './components/WeatherWidget'
import InputWidget from './components/InputWidget'
import * as Api from './api'
import './App.css'
export default class App extends Component {

    state= {
        currentTemp: '---',
        currentCity: '---'
    };

    componentDidMount() {
        Api.getWeatherByName('Almería').then((response)=>{
            this.setState({currentTemp: response.main.temp, currentCity: response.name});
        })
    }

    searchHandler = ({value}) => {
        Api.getWeatherByName(value).then((response) => {
            if(response.cod === 200) {
                return this.setState({currentTemp: response.main.temp, currentCity: response.name});
            }
            this.setState({currentTemp: '0', currentCity: response.message.toUpperCase()});
        })
    };

    render() {
        const {currentTemp, currentCity } = this.state;
        return (
            <div className="App">
                <InputWidget onClick={this.searchHandler}/>
                <WeatherWidget city={currentCity} temp={currentTemp}/>
            </div>
        );
    }
}

