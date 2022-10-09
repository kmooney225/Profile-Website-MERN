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
        background: #100000;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }

    body::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-thumb:vertical {
    background: #555; 
    border-radius: 3px;
    }


    ::-webkit-scrollbar-track {
    background: #fff; 
    }
    button{
        z-index: 3;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #ff0000;
        border-radius: 20px;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color: #950101;
            color: white;
        }
    }
    h2{
        color: white;
        font-weight: lighter;
        font-size: 7rem;
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
        color: #ff3333;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`

export default GlobalStyle;