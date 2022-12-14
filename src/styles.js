import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 15rem;
    color: white;
    @media (max-width: 850px){
            display: block;
            padding: 2rem 2rem;
            text-align: center;
        }
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 10rem;
    h2{
        font-weight: lighter;
    }
    @media (max-width: 950px){
            padding: 0;
            button{
                margin: 2rem 0rem 5rem 0rem;
            }
        }
`;

export const Image = styled.div`
    z-index: 2;
    flex: 1;
    width: 100%;
    height: 80vh;
    margin-right: auto;
    padding-top: 5rem;
    object-fit: cover;
    @media (min-width: 950px){
        align-items: center;
        display: flex;
        }
`;



export const Hide = styled.div`
    overflow: hidden;
`