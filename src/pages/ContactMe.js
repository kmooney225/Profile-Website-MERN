import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactMe = () => {
    return(
        <ContactStyle
        exit="exit"
        variants={pageAnimation} 
        initial="hidden"
        animate="show"
        style={{background: "#fff"}}>
            <Title>
                <motion.h2 variants={{titleAnim}}> 
                    Get in Touch!
                </motion.h2>
            </Title>
        <div>
            <Social variants={titleAnim}>
                <Circle>
                    <h2>Send An Email</h2>
                </Circle>
            </Social>
            <Social variants={titleAnim}>
                <Circle>
                    <h2>GitHub</h2>
                </Circle>
            </Social>
            <Social variants={titleAnim}>
                <Circle>
                    <h2>Linkedin</h2>
                </Circle>
            </Social>
        </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #150000;
    min-height: 90vh;
    @media (max-width: 1500px){
            padding: 2rem;
            font-size: 1rem;
        }
`
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px){
            margin-top: 5rem;
        }
`


const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #150000;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

export default ContactMe;