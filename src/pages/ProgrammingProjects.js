import { ReactComponentElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import musicPlayerPic from '../image/music-player.png';
import tetrominoPic from '../image/3-d-tetromino.png';
import xPlorePic from '../image/x-plore.png';
import { motion } from "framer-motion";
import { projectPageAnimation, 
    frameTrans, 
} from "../animation"
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import Particle from "../components/Particle";
import ProjectsTimelineElements from "../components/ProjectsTimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const ProgrammingProjects = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    
    return(
        
        <Projects        
        exit="exit"
        variants={projectPageAnimation}
        initial="hidden"
        animate="show"
        >
            <ScrollTop />
                    <Frame1 variants={frameTrans}></Frame1>
                <VerticalTimeline className="timeline">
                    {ProjectsTimelineElements.map((element) => {
                        let showButton = 
                        element.buttonText !== undefined && 
                        element.buttonText !== null && 
                        element.buttonText !== "";
                            return (
                                <VerticalTimelineElement className="vertical-timeline-element"
                                key={element.id}
                                >
                                    <h3 className="vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <img src={element.img} alt="" />
                                    <p className="description">
                                        {element.description}
                                    </p>
                                    {showButton && <a className={`button ${0 ? "" : ""}`} href="/"> {element.buttonText}</a>}
                                </VerticalTimelineElement>
                            );
                        })
                    }
                </VerticalTimeline>

                {/* <Example>
                    <motion.h2 variants={fade}>Music Player</motion.h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/">
                        <motion.div variants={photoAnim}  className="container">
                        <img src={musicPlayerPic} alt="" />
                        </motion.div>
                    </Link>
                </Example>
                <Example ref={element} variants={fade} animate={controls} initial="hidden">
                    <h2>3D Tetromino</h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/">
                    <div className="container">
                        <img src={tetrominoPic} alt="" />
                        </div>
                    </Link>
                </Example>
                <Example ref={element2} variants={fade} animate={controls2} initial="hidden">
                    <h2>X-Plore: The Country Stats App</h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/">
                    <div className="container">
                        <img src={xPlorePic} alt="" />
                    </div>
                    </Link>
                </Example> */}
                <Particle />
        </Projects>
        
    )
}

const Projects = styled(motion.div)`
    minHeight: 100vh;
    overflow: hidden;
    z-index: 1;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
        .timeline{
            h3 {
                color: #212121;
                padding-top: 1rem;
                font-size: 24px;
            }
            p {
                color: #212121;
                font-size: 16px;
            }
            img{
            
            width: 100%;
            height: 50vh;
            margin-top: 1rem;
            object-fit: cover;
            border-radius: 20px;
            align-items: center;
        }
        @media (max-width: 700px){
            img{
                width: 100%;
                height: 30vh;
            }
        }
    }
    .vertical-timeline-element-content {
        box-shadow: 0 1rem 2rem 0 rgba(255, 255, 255, 0.25), 0, 0.5rem 2rem 0 rgb(255, 255, 255, 0.15) !important;
        padding: 2rem 3rem !important;
    }
    .vertical-timeline-element {
        padding: 3rem;
        opacity: 0.9;
    }
    #description{
        margin: 2rem 0 2rem 0;
    }
    .button {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #14ffec;
        background: transparent;
        color: #212121;
        transition: all 0.5s ease;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color: #0d7377;
            color: white;
        }
    }
    @media (max-width: 1300px){
            padding: 2rem 2rem;
        }
`

const Example = styled(motion.div)`
    padding-bottom: 10rem;
  
    .line{
        height: 0.5rem;
        background: #14ffec;
        margin-bottom: 3rem;
    }
    .container{
        z-index: 10;
        background: #0d7377;
        padding: 5px;
        border-radius: 10px; 
        width: 90vh;     
    }
    img{
        
        width: 100%;
        height: 90vh;
        object-fit: cover;
        border-radius: 10px;
        align-items: center;
    }
    @media (max-width: 700px){
        .container{
            width: 100%;
        }
            img{
                height: 100%;
            }
        }
`



const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    width: 100%;
    height: 300vh;
    background: #fffebf;
    z-index: 2;
`


export default ProgrammingProjects;