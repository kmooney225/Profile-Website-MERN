import React from "react";
import profilePic from "../image/profile-pic.JPG"
import styled from "styled-components";

const ServicesSection = () => {
    return(
        <div>
            <div className="description">
                <div className="hide">
                    <h2>Checkout my <span>services</span></h2>
                </div>
            </div>
            <p>
            </p>
            <button>Contact Me</button>
        <Image>
            <img src={profilePic} alt="Me" />
        </Image>
    </div>
    )
}

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: auto;
        height: 80vh;
        object-fit: cover;
    }
`;


export default ServicesSection;