import {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";


const Nav = () => {
    const {pathname} = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const clickHandler = () =>{
        return setIsNavExpanded(false)
    }
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="#">
                    Kevin
                </Link>
            </h1>
            <ul style={ isNavExpanded ? { display:'block'} : {display : 'none'}}>
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
                {/* icon from heroicons.com */}
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

const StyledNav = styled.nav`
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
    @media (max-width: 1300px){
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

    @media screen and (max-width: 768px) {
        .hamburger {
            display: block;
        }
        h1 {
        position: relative;
        right: 40%;
        }

        ul {
            // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
            position: absolute;
            top: 60px;
            left: 0;
            // stacks the li tags vertically 
            flex-direction: column;
        // makes menu span full height and width
            width: 100%;
            height: calc(100vh - 50px);
            background-color: #990000;
            border-top: 1px solid black;
            
            padding-top: 10px;
        }
        li {
            // centers link text and strips off margin
            text-align: center;
            margin: 0;
            padding-top: 20px;
            display: block;
        }
        li a {
            color: white;
            font-size: 30px;
            // increases the surface area of the anchor tag to span the full width of the menu
            width: 100%;
            padding: 1.5rem 0;
        }
        li:hover {
            background-color: #eee;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #ff0000;
    position: absolute;
    bottom: -50%;
    @media (max-width: 1300px){
            left: 0%;
        }
`

export default Nav;