import {useState, useEffect } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const clickHandler = () =>{
        if (window.innerWidth <= 768) {
            return setIsNavExpanded(false)
        }
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="#">
                    Kevin
                </Link>
            </h1>
            <ul style={ isNavExpanded && windowWidth <=768 ? { display:'block'} : 
                    windowWidth >=768 ? {display : 'flex'} : 
                    {display : 'none'}}
                    >
                <li onClick={() => clickHandler()}>
                    <Link to="/">About Me</Link>
                </li>
                <li onClick={() => clickHandler()}>
                    <Link to="/ProgrammingProjects">Programming Projects</Link>
                </li>
                <li onClick={() => clickHandler()}>
                    <Link to="/Music">Music</Link>
                </li>
                <li onClick={() => clickHandler()}>
                    <Link to="/ContactMe">Contact Me</Link>
                </li>
            </ul>
            <button 
            className="hamburger"
            onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            }}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #400000;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }

    .hamburger {
        // removes default border on button element
        border: 0;
        height: 40px;
        width: 40px;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: #cc0000;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        // positions the icon to the right and center aligns it vertically
        position: relative;
        top: 0%;
        left: 40%;
        transform: translateY(-50%);
        display: none;
        }
        .hamburger:hover {
        background-color: #ff0000;
        }

    @media  screen and (max-width: 1300px){
            flex-direction: column;
            padding: 1rem;
            #Logo {
                display: inline-block;
                margin: 2rem;
            }
            ul{
                padding: 2rem;
                justify-content: space-around;
                width: 100%;
            }
            li{
                padding: 0;
            }
        }

    @media screen and (max-width: 765px) {
        .hamburger {
            display: block;
        }
        h1 {
        position: relative;
        right: 40%;
        }

        ul {
            position: absolute;
            top: 60px;
            left: 0;
            height: calc(100vh - 50px);
            background-color: #990000;
        }
        li {
            text-align: center;
            padding: 2rem 0;
        }
        li:hover {
            background-color: #400000;
        }
    }
`;

export default Nav;