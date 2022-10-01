import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1700px){
            font-size: 70%
        }
    }

    body{
        background: #212121;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #14ffec;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color: #0d7377;
            color: white;
        }
    }
    h2{
        color: white;
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