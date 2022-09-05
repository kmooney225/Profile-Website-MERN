import React from "react";
import profilePic from "../image/profile-pic.JPG"
import styled from "styled-components";
import {About,Description,Image,Hide} from "../styles"

const ServicesSection = () => {
    return(
        <Services>
            <Description>
                <Hide>
                    <h2>Checkout my <span>services</span></h2>
                </Hide>
                <button>Contact Me</button>
            </Description>
        <Image>
            <img src={profilePic} alt="Me" />
        </Image>
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
`

export default ServicesSection;