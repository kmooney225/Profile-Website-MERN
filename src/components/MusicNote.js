import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const MusicNote = () => {
    return(
        <MusicNoteSvg width="260" 
            height="600" 
            viewBox="0 0 513 1213" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
             initial={{pathLength: 0, pathOffset: 1}}
             animate={{pathLength: 1, pathOffset: 0}}
             transition={{ duration: 1}}
             d="M318.969 710.149C43.5112 858.45 149.504 652.302 318.969 565.53C488.434 478.758 638.179 652.302 318.969 862.658C-0.241591 1073.01 -121.64 912.091 178.467 565.53C478.574 218.968 410.788 -148.629 246.253 74.3483C81.7178 297.326 652.969 870.546 270.902 1101.94C-111.164 1333.33 0.964722 1126.65 203.116 994.656C405.268 862.658 284.46 1044.09 178.467 1101.94C93.6728 1148.22 143.136 1101.94 178.467 1073.01" 
                stroke="silver" 
                strokeOpacity="0.2"
                strokeWidth="12"
            />
        </MusicNoteSvg>
    )
}

const MusicNoteSvg = styled.svg`
    position: absolute;
    margin-left: 10%;
    left: 20rem;
    top: 10rem;
    z-index: 1;
`

export default MusicNote;