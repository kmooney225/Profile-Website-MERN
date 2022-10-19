import React from "react";
import styled from "styled-components";
import {About} from "../styles";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const StackSection = () => {
    const [element,controls] = useScroll();

    const displayTextFrontend = (e) =>{
        e.target.src = require("../image/front-moon-active.png");
        return(
            <div>
                <h3>Tools:</h3>
                <h3>1.</h3>
                <h3>2.</h3>
            </div>
        )
    }

    const displayTextBackend = (e) =>{
        e.target.src = require("../image/front-moon-active.png");
        return(
            <div>
                <h3>Tools:</h3>
                <h3>1.</h3>
                <h3>2.</h3>
            </div>
        )
    }

    const displayTextTools = (e) =>{
        e.target.src = require("../image/front-moon-active.png");
        return(
            <div>
                <h3>Tools:</h3>
                <h3>1.</h3>
                <h3>2.</h3>
            </div>
        )
    }

    const hideText = (e) =>{
        e.target.src = require("../image/front-moon-unactive.png");
        return(
            <div>
                <h3>Tools:</h3>
                <h3>1.</h3>
                <h3>2.</h3>
            </div>
        )
    }

    return(
    <Stack variants={scrollReveal} animate={controls} initial="hidden" ref={element}>

        <h2>
            Skills
        </h2>
        
        <img src={require("../image/front-moon-unactive.png")} 
            alt="" 
            onMouseOver={displayTextFrontend} 
            onMouseOut={hideText}
            />
        <img src={require("../image/full-moon-unactive.png")} 
            alt=""  
            onmouseover={displayTextTools}
        />
        <img src={require("../image/back-moon-unactive.png")} 
            alt=""  
            onmouseover={displayTextBackend}
        />

        <h3>

        </h3>


    </Stack>
    )
}

const Stack = styled(About)`
    text-align: center;

    h2{
        font-size: 90px;
    }
    svg{
        fill: #f00;
    }

`

export default StackSection;