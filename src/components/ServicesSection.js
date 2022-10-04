import React from "react";
import profilePic from "../image/profile-pic.JPG";
import styled from "styled-components";
import {About,Description,Image,Hide} from "../styles";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import {Cloud, 
        renderSimpleIcon, 
        fetchSimpleIcons, 
        SimpleIcon} from 'react-icon-cloud'

const ServicesSection = () => {
    const [element,controls] = useScroll();
    const TagCloud = require('TagCloud');
    const icons = () => {
        return(
            <a>cap</a>
        )
    }
      
      
    return(
    <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
        <Cloud size={500} >
            <a>React</a>
            <a>JS</a>
            <a>CSS</a>
            <a>HTML</a>
            <a>Python</a>


        </Cloud>
    </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    a{
        font-size: 80px;
    }
`

export default ServicesSection;