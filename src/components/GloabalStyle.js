import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #200000;;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2 rem;
        border: 3px solid #cc0000;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #cc0000;;
            color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #cc0000;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`

export default GlobalStyle;