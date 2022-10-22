import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

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
        background: #050000;
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
    .Toastify__toast--error {
    border: 1px solid #EB5757;
    border-radius: 50px !important;
    background: #FAE1E2 !important;
}
.Toastify__toast--error::after {
  content : url('../assets/images/svg/closeToast.svg'); // Your svg Path
  position: absolute;
  color: #333333;
  font-size: 15px;
  font-weight: 700;
  left:265px;
  padding-top: 14px !important;
}
.Toastify__toast--error::before {
  content: url("../assets/images/svg/errorToast.svg");// Your svg Path
  position:relative; 
  z-index:100000;
  left:12px;
  top:6px;
}
.Toastify__toast--success {
  border: 1px solid #3A9EA5 !important;
  border-radius: 50px !important;
  background: #F0F9FA !important;
}
.Toastify__toast--success::before {
  content: url("../assets/images/svg/successToast.svg");// Your svg Path
  position:relative; 
  z-index:100000;
  left:12px;
  top:6px;
}
.Toastify__toast--success::after {
  content : url('../assets/images/svg/closeToast.svg');// Your svg Path
  position: absolute;
  color: #333333;
  font-size: 15px;
  font-weight: 700;
  left:265px;
  padding-top: 14px !important;
}
.Toastify__toast--warning {
  border: 1px solid #E78326  !important;
  border-radius: 50px !important;
  background: #FADFC5 !important;
}
.Toastify__toast--warning::before {
  content: url("../assets/images/svg/warnToast.svg");// Your svg Path
  position:relative; 
  z-index:100000;
  left:12px;
  top:6px;
}  
.Toastify__toast--warning::after {
  content : url('../assets/images/svg/closeToast.svg'); // Your svg Path
  position: absolute;
  color: #E78326;
  font-size: 15px;
  font-weight: 700;
  left:265px;
  padding-top: 14px !important;
}
.Toastify__toast-body {
  color: #444C63    ;
  font-size: 16px;
  padding-left: 20px;
  line-height: 20px;
  padding: 0px;
  padding-top: 25px;
  width: 100%;
  font-weight: 400;
  margin-left: 25px !important;
} 
.Toastify__toast > button>  svg {
    display: none;
}
`

export default GlobalStyle;