import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop";

const Music = () => {
    return(
        <motion.div
        exit="exit"
        variants={pageAnimation} 
        initial="hidden"
        animate="show">
            <h1>Our Work</h1>
            <ScrollTop />
        </motion.div>
    )
}

export default Music;