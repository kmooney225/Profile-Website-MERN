import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation"

const Music = () => {
    return(
        <motion.div
        exit="exit"
        variants={pageAnimation} 
        initial="hidden"
        animate="show">
            <h1>Our Work</h1>
        </motion.div>
    )
}

export default Music;