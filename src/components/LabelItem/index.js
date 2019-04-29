import React , { PureComponent } from 'react';
import Proptypes from 'prop-types'
import * as Styled from './styles'

class LabelItem extends PureComponent {

    static propTypes = {
        value: Proptypes.oneOfType([Proptypes.string,Proptypes.number]),
        label: Proptypes.string
    };

    static defaultProps = {
        value: '---',
        label: '---'
    };

    render(){
        const { label,value } = this.props;
        return (
            <Styled.LabelWrapper >
                <p className={'label-item'}>{label}</p>
                <p className={'label-value'}>{value}</p>
            </Styled.LabelWrapper>
        );
    }
}

export default LabelItem
