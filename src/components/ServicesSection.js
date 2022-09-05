import React from "react";
import profilePic from "../image/profile-pic.JPG"

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
        <div className="image">
            <img src={profilePic} alt="Me" />
        </div>
    </div>
    )
}

export default ServicesSection;