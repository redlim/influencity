import styled from 'styled-components/macro'
import { theme } from '../../utils/theme'

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 25px 1px rgba(50, 50, 50, 0.1);
    border-radius: 16px;
    .city-input {
        width: 100%;
        height: ${(props) => props.height ? props.height : 56}px;
        border-radius: 16px 0 0 16px;
    }
    
    .button {
        width: 80px;
        height: ${(props) => props.height ? props.height : 56}px;
        border-radius: 0 16px 16px 0;
        background-color:${ theme.colors.$color6 }
    }
`