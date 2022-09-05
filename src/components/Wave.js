import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Wave = () => {
    return(
        <WaveSvg 
            viewBox="0 0 1578 407" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <motion.path
                initial={{pathLength: 0, pathOffset: 1}}
                animate={{pathLength: 1, pathOffset: 0}}
                transition={{ duration: 1}}
                d="M4 197C344.5 547 747 379 1001.5 197C1205.1 51.4 1470.33 8.33333 1577.5 5" 
                stroke="silver" 
                strokeOpacity="0.2"
                strokeWidth="10"
            />  
        </WaveSvg>
    )
}

const WaveSvg = styled.svg`
    position: absolute;
    left: -1rem;
    z-index: 1;
`

export default Wave;