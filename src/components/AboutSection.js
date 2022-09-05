import React from "react";
import profilePic from "../image/profile-pic.JPG";
//import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles";
import Wave from "./Wave";
import { motion } from "framer-motion";

const AboutSection = () => {

    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>
                            Creating. 
                        </motion.h2>
                    </Hide>
                    <motion.h2>
                            Inventing. 
                        </motion.h2>
                    <Hide>
                    <motion.h2>
                           Dreaming. 
                        </motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact me for any music 
                    or website creating services that you need. 
                </p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={profilePic} alt="Me" />
            </Image>
            <Wave animate={{pathLength: 1, pathOffset: 0}}/>
        </About>

    )
}

export default AboutSection;