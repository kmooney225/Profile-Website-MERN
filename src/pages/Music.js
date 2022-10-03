import styled from "styled-components";
import { motion } from "framer-motion";
import { projectPageAnimation, 
    frameTrans, 
} from "../animation"
import ScrollTop from "../components/ScrollTop";
import MusicParticle from "../components/MusicParticle";
import MusicTimelineElements from "../components/MusicTimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const Music = () => {
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
                    {MusicTimelineElements.map((element) => {
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
                                    <iframe 
                                        width="100%" 
                                        height="50vh" 
                                        src={element.video} 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                    >
                                    </iframe>
                                    <p className="description">
                                        {element.description}
                                    </p>
                                    {showButton && <a className={`button ${0 ? "" : ""}`} href="/"> {element.buttonText}</a>}
                                </VerticalTimelineElement>
                            );
                        })
                    }
                </VerticalTimeline>
                <MusicParticle />
        </Projects>
    )
}

const Projects = styled(motion.div)`
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
            iframe{
            
            width: 100%;
            height: 50vh;
            margin-top: 1rem;
            object-fit: cover;
            border-radius: 20px;
            align-items: center;
        }
        @media (max-width: 700px){
            iframe{
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

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    width: 100%;
    height: 300vh;
    background: #fffebf;
    z-index: 2;
`


export default Music;