import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";


const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="#">
                    Kevin
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                    <Line 
                        transition={{duration: 0.75 }} 
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/' ? "36%": "0%" }}
                    />
                </li>
                <li>
                    <Link to="/ProgrammingProjects">Programming Projects</Link>
                    <Line 
                        transition={{duration: 0.75 }} 
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/ProgrammingProjects' ? "56%": "0%" }}
                    />
                </li>
                <li>
                    <Link to="/Music">Music</Link>
                    <Line 
                        transition={{duration: 0.75 }} 
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/Music' ? "25%": "0%" }}
                    />
                </li>
                <li>
                    <Link to="/ContactMe">Contact Me</Link>
                    <Line 
                        transition={{duration: 0.75 }} 
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/ContactMe' ? "39%": "0%" }}
                    />
                </li>
            </ul>
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
    background: #323232;
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
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #14ffec;
    position: absolute;
    bottom: -50%;
    @media (max-width: 1300px){
            left: 0%;
        }
`

export default Nav;