import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import musicPlayerPic from '../image/music-player.png';
import tetrominoPic from '../image/3-d-tetromino.png';
import xPlorePic from '../image/x-plore.png';

const ProgrammingProjects = () => {
    return(
        <Projects>
            <Example>
                <h2>Music Player</h2>
                <div className="line"></div>
                <Link to="/">
                    <div className="container">
                    <img src={musicPlayerPic} alt="" />
                    </div>
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

const Projects = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }

`

const Example = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
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

export default ProgrammingProjects;