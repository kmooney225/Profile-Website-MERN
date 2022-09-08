import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import musicPlayerPic from '../image/music-player.png';
import tetrominoPic from '../image/3-d-tetromino.png';
import xPlorePic from '../image/x-plore.png';
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, frameTrans, frameTransContainer} from "../animation"


const ProgrammingProjects = () => {
    return(
        <Projects        
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{background: "#fff"}}>
            <motion.div variants={frameTransContainer}>
                <Frame1 variants={frameTrans}></Frame1>
                <Frame2 variants={frameTrans}></Frame2>
                <Frame3 variants={frameTrans}></Frame3>
                <Frame4 variants={frameTrans}></Frame4>
            </motion.div>
            <Example>
                <motion.h2 variants={fade}>Music Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/">
                    <motion.div variants={photoAnim}  className="container">
                    <img src={musicPlayerPic} alt="" />
                    </motion.div>
                </Link>
            </Example>
            <Example>
                <h2>3D Tetromino</h2>
                <div className="line"></div>
                <Link to="/">
                <div className="container">
                    <img src={tetrominoPic} alt="" />
                    </div>
                </Link>
            </Example>
            <Example>
                <h2>X-Plore: The Country Stats App</h2>
                <div className="line"></div>
                <Link to="/">
                <div className="container">
                    <img src={xPlorePic} alt="" />
                </div>
                </Link>
            </Example>
        </Projects>
    )
}

const Projects = styled(motion.div)`
    minHeight: 100vh;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }

`

const Example = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cc0000;
        margin-bottom: 3rem;
    }
    .container{
        background: #00a2ff;
        padding: 5px;
        border-radius: 10px; 
        width: 80vh;     
    }
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff83fb;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0;
`



export default ProgrammingProjects;