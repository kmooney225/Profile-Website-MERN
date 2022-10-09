import styled from "styled-components";
import { motion } from "framer-motion";
import { projectPageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop";
import MusicParticle from "../components/MusicParticle";
import MusicTimelineElements from "../components/MusicTimelineElements";
import "react-vertical-timeline-component/style.min.css"


const Cards = () => {
    return(
        <ul>
        {MusicTimelineElements.map(
            (card, i)=>
            <li  key={i}>
            <figure>
                <iframe title={card.title} src={card.video} alt={card.title}
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                <figcaption> 
                <span>{card.title}</span>
                <div className="description">{card.description}</div>
                <a href={card.video}><button>Check it Out!</button></a>
                </figcaption>
            </figure>
            </li>)}
        </ul>
        )}


const Music = () => {

    return(
         
        <Projects        
        exit="exit"
        variants={projectPageAnimation}
        initial="hidden"
        animate="show"
        >
            <ScrollTop />
            <h2 className="head-text">The <span>Music</span> Section</h2>
                <Cards />
                <MusicParticle />
        </Projects>
    )
}

const Projects = styled(motion.div)`
    overflow: hidden;
        
    body{

    display: block;
    position: absolute;

    top: -120px;
    right: -120px;
    width: 300px;
    height: 300px;
    background: #faa7b730;
    }

    .head-text{
        font-size: 40px;
        text-align: center;
        margin: 30px;
    }

    form{
    display: flex;
    justify-content: center;
    margin: 30px 0 30px 0;
    }

    input{
    display: none;
    }

    ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    }

    li{
    margin: 10px 10px;
    }

    @keyframes show {
    0% {
        opacity: 0;
     }
    100% {
        opacity: 1;
        }
    }

    figure{
    z-index: 1;
    background: #c22;
    border: outset #fbb;
    border-radius: 20px;
    box-shadow: 0 2px 8px 5px #ffffff25;
    color: #212121;
    font-style: italic;
    padding: 2px;
    text-align: center;
    width: 400px;
    overflow: hidden;
    animation: show .5s ease-in-out;
    }

    iframe{
    width: 300px;
    height: 200px;
    left: 0;
    border: solid;
    object-fit: cover;
    border-radius: 20px;
    animation: show .5s ease-in-out;
    }

    figcaption{
    font-size: 18px;
    background: linear-gradient(to top left, #ccc, #fff);
    border-radius: 10px  10px 20px 20px;
    border: #200000 solid;
    padding: 30px 0 20px 0;
    animation: show .5s ease-in-out;
    span{
        color: #200;
        font-size: 28px;
    }
    }

    figure figcaption{
    margin: 0;
    position: relative;
    }
    figure button{
        color: #200000;
        margin: 10px;
        &:hover{
            background-color: #bb0101;
            color: white;
        }
    }
    
    @media (max-width: 850px){
        figure{
            width: 350px;
        }
`

export default Music;