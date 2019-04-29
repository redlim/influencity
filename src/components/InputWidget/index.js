import React , { PureComponent } from 'react';
import Proptypes from 'prop-types'
import * as Styled from './styles'

class InputWidget extends PureComponent {

    static propTypes = {
        value: Proptypes.string,
        onClick: Proptypes.func
    };

    static defaultProps = {
        value: '',
        onClick: ()=>{}
    };

    state = {
        value: ''
    };

    componentDidMount() {
        this.setState({value: this.props.value || ''})
    }

    changeHandler = (e) => {
        this.setState({value : e.target.value})
    };

    handleClick = () => {
        const { value } = this.state;
        this.props.onClick({value: value});
        this.setState({value:''});
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    };

    render(){
        const { value } = this.state;
        return (
            <Styled.InputWrapper height={56}>
                <input type={'text'} className="city-input" value={value} onChange={this.changeHandler}  onKeyDown={this.handleKeyDown}/>
                <button className="button" onClick={this.handleClick}>Search</button>
            </Styled.InputWrapper>
        );
    }
}

export default InputWidget
