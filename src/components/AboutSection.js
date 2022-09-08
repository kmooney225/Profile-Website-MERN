import React from "react";
import profilePic from "../image/profile-pic.JPG";
//import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {

    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Creating. 
                        </motion.h2>
                    </Hide>
                    <motion.h2 variants={titleAnim}>
                            Inventing. 
                        </motion.h2>
                    <Hide>
                    <motion.h2 variants={titleAnim}>
                           Dreaming. 
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for any music 
                    or website creating services that you need. 
                </motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={profilePic} alt="Me" />
            </Image>
            <Wave animate={{pathLength: 1, pathOffset: 0}}/>
        </About>

    )
}

export default AboutSection;