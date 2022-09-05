import React from "react";
import profilePic from "../image/profile-pic.JPG"

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Creating. </h2>
                    </div>
                    <div className="hide">
                        <h2>Inventing. </h2>
                    </div>
                    <div className="hide">
                        <h2>Dreaming. </h2>
                    </div>
                </div>
                <p>Contact me for any music 
                    or website creating services that you need. 
                </p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={profilePic} alt="Me" />
            </div>
        </div>

    )
}

export default AboutSection;