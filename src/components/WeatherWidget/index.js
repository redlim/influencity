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
        clouds: Proptypes.bool
    };

    static defaultProps = {
        temp: '---',
        city: '---',
        clouds: false
    };

    render(){
        const { temp, city, clouds } = this.props;
        const classes = `wheather-icon ${clouds ? 'cloud' : 'sun'}`;
        return (
            <Styled.CardWrapper>
                <div className={classes}></div>
                <figcaption>
                    <p className="temp">{temp}º</p>
                    <p className="city">{city}</p>
                </figcaption>
            </Styled.CardWrapper>
        );
    }
}

export default WeatherWidget;
