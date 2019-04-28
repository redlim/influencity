import styled from 'styled-components/macro'
import { theme } from '../../utils/theme'

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    .city-input {
        width: 100%;
        height: ${(props) => props.height ? props.height : 56}px;
        border-radius: 16px 0 0 16px;
    }
    
    .button {
        width: 80px;
        height: ${(props) => props.height ? props.height : 56}px;
        border-radius: 0 16px 16px 0;
        background-color:${theme.colors.$color6}
    }
`