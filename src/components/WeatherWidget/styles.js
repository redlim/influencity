import styled from 'styled-components/macro'
import { theme } from '../../utils/theme'

export const CardWrapper = styled.figure`
    margin:  20px 5px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    width: 270px;
    height: 270px;
    background-color: ${theme.colors.$color2};
    box-shadow: 0px 0px 25px 1px rgba(50, 50, 50, 0.1);
    animation: appear 500ms ease-out forwards;
    .temp {
        position: absolute;
        font-family: 'Lato', sans-serif;
        font-weight:300;
        font-size:80px;
        color: ${theme.colors.$color3};
        bottom: 0;
        left: 35px;
        opacity: 0;
        transform: translateX(150px);
        animation: title-appear 500ms ease-out 500ms forwards;
    }
    .city {
        position: absolute;
        font-family: 'Lato', sans-serif;
        font-weight:300;
        font-size:28px;
        color: lighten(${theme.colors.$color3}, 10%);
        bottom: 0;
        left: 35px;
        animation: title-appear 1s ease-out 500ms forwards;
    }
    
    .weather-icon {
        position: relative;
        width: 50px;
        height: 50px;
        top: 0;
        float: right;
        margin: 40px 40px 0 0;
        animation: weather-icon-move 5s ease-in-out infinite;
    }

    .sun { 
        background: ${theme.colors.$color4}; 
        border-radius: 50%; 
        box-shadow: rgba(255,255,0,0.1) 0 0 0 4px;
        animation: light 800ms ease-in-out infinite alternate, weather-icon-move 5s ease-in-out infinite;
    }

    @keyframes light {
        from {
            box-shadow: rgba(255,255,0,0.2) 0 0 0 10px;
        }
        to {
            box-shadow: rgba(255,255,0,0.2) 0 0 0 17px;
        }
    }

    .cloud { 
        margin-right:60px;
        background: ${theme.colors.$color6}; 
        border-radius: 20px; 
        width: 25px;
        height: 25px;
        box-shadow: ${theme.colors.$color6} 24px -6px 0 2px, 
            ${theme.colors.$color6} 10px 5px 0 5px, 
            ${theme.colors.$color6} 30px 5px 0 2px, 
            ${theme.colors.$color6} 11px -8px 0 -3px, 
            ${theme.colors.$color6} 25px 11px 0 -1px;
        
        
        &:after {
            content: "";
            position: absolute;
            border-radius: 10px;
            background-color: transparent;
            width: 4px;
            height: 12px;
            left: 0;
            top: 31px;
            transform: rotate(30deg);
            
            animation: rain 800ms ease-in-out infinite alternate;
        }
    }
    
    @keyframes rain {
        from {
            box-shadow:${theme.colors.$color5} 8px 0px,${theme.colors.$color5} 32px -6px,${theme.colors.$color5} 20px 0px;
        }
        to {
            box-shadow:${theme.colors.$color5} 8px 6px,${theme.colors.$color5} 32px 0px,${theme.colors.$color5} 20px 6px;
        }
    }
    
    @keyframes weather-icon-move {
        50% { 
            transform: translateY(-8px); 
        }
    }
    
    @keyframes appear {
      0% {
        transform:scale(0);
      }
      50% {
        transform:scale(1.05)
      }
      75% {
        transform:scale(0.95)
      }
      100% {
       transform:scale(1)
      }
    }
    
    @keyframes title-appear {
        from {
            opacity: 0;
            transform: translateX(150px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`