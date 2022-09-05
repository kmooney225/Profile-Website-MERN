import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1><a id="logo" href="#">Kevin</a></h1>
            <ul>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">Programming Projects</a>
                </li>
                <li>
                    <a href="#">Music</a>
                </li>
                <li>
                    <a href="#">Services and Example Websites</a>
                </li>
                <li>
                    <a href="#">Contact Me</a>
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
    background: #200000;
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
`

export default Nav;