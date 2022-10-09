import React from "react";
import styled from "styled-components";
import {About} from "../styles";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element,controls] = useScroll();

    return(
    <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>


        <div className="about-me">
            <h1>About Me</h1>
            <p>Hey, I'm Kevin, an American web developer and musician. I enjoy working on
                and learning from all sorts of experiences, being it an building a 3d
                Tetris web game or playing saxophone at the Hard Rock Cafe monthly.
                <br /><br />
                I am currently based in Denver, Colorado. I work for a software API company,
                but I like to do freelance projects on my free time. I also playing at different
                restaurants and different private events like parties and weddings on
                the weekend. 
                <br /><br />
                I am passionately about learning more about javascript and python 
                frameworks as I spend a fair bit of my personal and freelance time
                using React.js and Python Flask. I also aspire to learn more about the 
                .NET world with C# as I am learning more about 3D development.
                <br />
            </p>
        </div>
    </Services>
    )
}

const Services = styled(About)`
    text-align: center;

    a{
        font-size: 80px;
    }

`

export default ServicesSection;