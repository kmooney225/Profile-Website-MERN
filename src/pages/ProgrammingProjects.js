import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectPageAnimation, 
    frameTrans, 
} from "../animation"
import ScrollTop from "../components/ScrollTop";
import Particle from "../components/Particle";
import ProjectElements from "../components/ProjectElements";
import "react-vertical-timeline-component/style.min.css"

const ProgrammingProjects = () => {
 
    const [filters, setFilters] = useState([
        {id: 0, name:"Web Projects", isSet: false},
        {id: 1, name:"Clients' Projects", isSet: false},
        {id: 2, name:"Extraneous Projects", isSet: false},
      ]);

    const setAll = () => {

    }

    const Filters = () =>
        <form>
            <ul>
            {filters.map(
                (filter, i)=>
                <li  key={i} data-index={i} onClick={() => onFilter(i)} >
                    <input 
                    id={filters.id}
                    type="checkbox" 
                    checked={filter.isSet}
                    onChange={e => {}}
                    />
                    <label htmlFor={filter.name}>{filter.name}</label>
                </li>)}
            </ul>
        </form>
        
    const onFilter = (index) => {
        setFilters(
            filters.map((item) => 
            item.id === index
                ? {...item, isSet: !item.isSet }
                : {...item}
        ))
    }

    let cardArray = [];
    const Cards = () => {
        cardArray = [];

        ProjectElements.forEach((card, cardKey) => {
            filters.forEach((filter, filterKey)=> {  
                if((card.tag===filter.name)&&(filter.isSet===true)){
                  cardArray.push(card);
                }
            })
            })

        return(
        <ul>
        {cardArray.map(
            (card, i)=>
            <li  key={i}>
            <figure>
                <img src={card.img} alt={card.title}/>
                <figcaption> 
                <div>{card.title} </div>
                <span>{card.tag}</span>
                </figcaption>
            </figure>
            </li>)}
        </ul>
        )}


    return(
        
        <Projects        
        exit="exit"
        variants={projectPageAnimation}
        initial="hidden"
        animate="show"
        >
            <ScrollTop />
                <div>
                    <Filters />
                    <Cards />
                    
                </div>
            <Particle />
        </Projects>
        
    )
}

const Projects = styled(motion.div)`
    overflow: hidden;
    z-index: 1;
        
    body:before{
    content: '';
    display: block;
    position: absolute;

    top: -120px;
    right: -120px;
    width: 300px;
    height: 300px;
    background: #faa7b730;
    }

    body:after{
    content: '';
    display: block;
    position: absolute;
    z-index: -2;
    bottom: -120px;
    left: -120px;
    width: 400px;
    height: 400px;
    background: #a8b4fc30;
    }

    form{
    display: flex;
    justify-content: center;
    margin: 30px 0 30px 0;
    }

    input{
    display: none;
    }

    label{
    background: #fff;
    color: #150000;
    font-weight: 700;
    padding: 8px 10px;
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
    }

    input:checked~label{
    background: linear-gradient(to bottom right, #ffffff, #ff8888);
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 5px 2px 15px #ff9999;
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

    figure{
    z-index: 1;
    min-width: 300px;
    overflow: hidden;
    margin: 0 5px;
    animation: show .8s ease;
    }

    @keyframes show {
    0% {opacity: 0;}
    100% {opacity: 1;}
    }

    img{
    width: 300px;
    height: 250px;
    left: 0;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 15px #ffffff30;
    }

    figcaption{
    font-size: 24px;
    margin-top: 20px;
    }

    figure figcaption{
    margin: 0;
    position: relative;
    z-index: -1;
    }

    figure:hover figcaption{
    opacity: 1;
    transform: translateY(-19px);
    }

    figcaption{
    opacity: 0;
    transform: translateY(-200px);
    background: white;
    border-radius: 0  0 20px 20px;
    padding: 30px 0 20px 0;
    transition: .3s;
    }

    @keyframes transform{
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
    14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
    28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
    42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
    56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
    70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
    84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
    }


    @keyframes movement{
    0%,100% { transform: none; }
    50% { transform: translateY(20%) rotateY(10deg); }
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