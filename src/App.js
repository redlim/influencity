import React, {Component} from 'react';
import WeatherWidget from './components/WeatherWidget'
import InputWidget from './components/InputWidget'
import * as Api from './api'
import './App.css'
import LabelItem from './components/LabelItem'
import MapItem from './components/Map'
export default class App extends Component {

    state= {
        currentTemp: '---',
        currentCity: 'Almería',
        listOfCities: ['Almería', 'Granada', 'Málaga', 'Jaén', 'Cordoba','Sevilla', 'Huelva', 'Cádiz'],
        listOfTemps: [],
        averageTemp:0
    };

    componentDidMount() {
        const { currentCity, listOfCities } = this.state;
        Api.getWeatherByGroupOfNames(listOfCities).then((res)=> {
            this.setState({listOfTemps: res});
            const sumOfTemps = res.reduce((acc,current)=>{
                acc += current.main.temp;
                return acc
            },0);
            this.setState({averageTemp: sumOfTemps/res.length})
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
        const {currentTemp, currentCity, listOfTemps, averageTemp } = this.state;
        return (
            <div className="App">
                <LabelItem value={Math.round(averageTemp)+'º'} label={'Average Temp'}/>
                <section className="items-wrapper">
                    {listOfTemps.map((temp)=>{
                        return <WeatherWidget
                            key={temp.id}
                            city={temp.name}
                            temp={Math.round(temp.main.temp)}
                            humidity={temp.main.humidity}
                            pressure={temp.main.pressure}
                            clouds={parseInt(temp.main.temp) < 15}/>
                    })}
                </section>
                {/*<MapItem/>*/}
            </div>
        );
    }
}

