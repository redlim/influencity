import React , { PureComponent } from 'react';
import Proptypes from 'prop-types'
import * as Styled from './styles'

/*
* based on https://codepen.io/ajerez/pen/KwYNWZ
 */
class WeatherWidget extends PureComponent {

    static propTypes = {
        temp: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
        city: Proptypes.string
    };

    static defaultProps = {
        temp: '---',
        city: '---'
    };

    render(){
        const { temp, city } = this.props;
        return (
            <Styled.CardWrapper>
                <div className="weather-icon cloud"></div>
                <p className="temp">{temp}º</p>
                <p className="city">{city}</p>
            </Styled.CardWrapper>
        );
    }
}

export default WeatherWidget;
