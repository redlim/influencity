import React , { PureComponent } from 'react';
import Proptypes from 'prop-types'
import * as Styled from './styles'

/*
* based on https://codepen.io/ajerez/pen/KwYNWZ
 */
class WeatherWidget extends PureComponent {

    static propTypes = {
        temp: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
        city: Proptypes.string,
        clouds: Proptypes.bool,
        humidity: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
        pressure: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),

    };

    static defaultProps = {
        temp: '---',
        city: '---',
        clouds: false
    };

    render(){
        const { temp, city, clouds, humidity, pressure } = this.props;
        const classes = `${clouds ? 'cloud' : 'sun'}`;
        return (
            <Styled.CardWrapper>
                <div className={classes}></div>
                <figcaption>
                    <p className="temp">{temp}º</p>
                    <p className="city">{city}</p>
                    <div className={'additional-info'}>
                        <span>
                           <p className="info-item">{humidity}</p><small >Humidity</small>
                        </span>
                        <span>
                            <p className="info-item">{pressure}</p><small >Pressure </small>
                        </span>
                    </div>
                </figcaption>
            </Styled.CardWrapper>
        );
    }
}

export default WeatherWidget;
