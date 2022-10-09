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
                I'm currently based in Denver, Colorado. I work for a software API company,
                but I like to do freelance web projects in my free time. I'm passionate about 
                learning more about javascript frameworks as I spend a fair bit of my personal 
                and freelance time using React.js and Python Flask. I also aspire to learn more 
                about the .NET world with C# as I am learning more about 3D development.
                the weekends. 
                <br /><br />
                I spend many of my weekends and evenings playing music for different restaurants 
                and private events, like weddings and parties. I love playing R&B and jazz, but
                I play an assortment of different music genres and learn almost anything if it calls
                for it. And if I have free nothing else, you may pass by me while doing street
                performance, whether that be in the middle of downtown, or whenever I decide to
                travel to a different city or country with my saxophone and bluetooth speaker.
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