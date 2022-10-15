import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StackSection from "../components/StackSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
    return(
        <motion.div 
        exit="exit"
        variants={pageAnimation} 
        initial="hidden"
        animate="show"
        >
            <AboutSection/>
            <StackSection/>
            <ServicesSection/>
            <ScrollTop />
        </motion.div>
    ) 
}

export default AboutMe;