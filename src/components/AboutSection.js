import React from "react";
import profilePic from "../image/profile-pic.JPG";
import styled from "styled-components";

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

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    img{
        width: auto;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection;