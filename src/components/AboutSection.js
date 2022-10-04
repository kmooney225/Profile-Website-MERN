import React from "react";
import saxophonePic from "../image/saxophone.jpg";
import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
  } from "react-particle-image";
//import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y)
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50
    },
    color: ({ x, y, image }) => "#fff"
  }

  const motionForce = function(x, y) {
    return forces.disturbance(x, y, 5)
  }

const AboutSection = () => {

    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Kevin Mooney 
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>I'm a web developer who aspires to
                work on front-end technologies.
                <br /><br />
                I'm also a talented music with 15 years of experiences playing for 
                venues.
                </motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
            <motion.div variants={photoAnim}>
                <ParticleImage
                src={saxophonePic}
                scale={0.075}
                entropy={20}
                maxParticles={2000}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                particleOptions={particleOptions}
                backgroundColor="#100000"
            />
             </motion.div>
            </Image>
            <Wave animate={{pathLength: 1, pathOffset: 0}}/>
        </About>

    )
}

export default AboutSection;