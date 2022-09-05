import React from "react";
import profilePic from "../image/profile-pic.JPG";
//import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles"

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Creating. </h2>
                    </Hide>
                    <Hide>
                        <h2>Inventing. </h2>
                    </Hide>
                    <Hide>
                        <h2>Dreaming. </h2>
                    </Hide>
                </div>
                <p>Contact me for any music 
                    or website creating services that you need. 
                </p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={profilePic} alt="Me" />
            </Image>
        </About>

    )
}

export default AboutSection;