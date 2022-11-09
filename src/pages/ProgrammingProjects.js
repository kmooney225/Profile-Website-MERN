import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectPageAnimation } from "../animation"
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

    let isAll = false;

    const Filters = () =>
        <form>
            <ul>
            <li onClick={() => allCards()} >
                    <input 
                    id={10}
                    type="checkbox" 
                    checked={isAll}
                    onChange={e => {}}
                    />
                    <label htmlFor="all">All</label>
                </li>
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

    const allCards = () => {
        setFilters(
            filters.map((item) => 
            ({...item, isSet: true })
        ))
        isAll = true;
        }

    const Cards = () => {
        let cardArray = [];

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
            {/* <figure>
                <img src={card.img} alt={card.title}/>
                <figcaption> 
                <span>{card.title}</span>
                <div className="description">{card.description}</div>
                <a href={card.link}><button>Check it Out!</button></a>
                </figcaption>
            </figure> */}
            <section className="dark"> 
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">{card.title}</h1>

                    <article className="postcard dark red">
                        <p className="postcard__img_link" href="#">
                            <img className="postcard__img" src={card.img} alt="" />
                        </p>
                        <div className="postcard__text">
                            <h1 className="postcard__title red">{card.title}</h1>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{card.description}</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item play red">
                                    <a href={card.link}><i className="fas fa-play mr-2"></i>View Project</a>
                                </li>
                                <li className="tag__item play red">
                                    <a href={card.code}><i className="fas fa-play mr-2"></i>View code</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
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
                <h2 className="head-text">The <span>Project</span> Section</h2>
                    <Filters />
                    <Cards />
                    
                </div>
            <Particle />
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
    text-rendering: optimizeLegibility;
	font-weight: initial;
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

    label{
    background: #fff;
    color: #150000;
    font-weight: 700;
    padding: 8px 10px;
    border: #aaa solid;
    border-width: 1px;
    border-radius: 8px;
    transition: .2s;
    cursor: pointer;
    }

    input:checked~label{
    background: linear-gradient(to bottom right, #ffaaaa, #ff6666);
    padding: 5px 10px;
    border-radius: 6px;
    border: #daa solid;
    border-width: 1px;
    box-shadow: 2px 2px 5px #bb5555;
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

    .postcard {
        flex-wrap: wrap;
        display: flex;
        background: linear-gradient(to bottom right, #202030, #300000);
        
        box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
        border-radius: 10px;
        margin: 0 0 2rem 0;
        overflow: hidden;
        position: relative;
        color: #ffffff;
        width: 400px;
        flex-direction: row-reverse;
        
    a {
        color: inherit;
        text-decoration: none;
    }
    .postcard__title {
      font-size: 20px;
    }

    .postcard__img {
        max-height: 400px;
        width: 100%;
        object-fit: cover;
        position: relative;
    }

    .postcard__img_link {
        display: contents;
    }

    .postcard__bar {
        width: 50px;
        height: 10px;
        margin: 10px 0;
        border-radius: 5px;
    }

    .postcard__text {
        padding: 1.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .postcard__preview-txt {
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        font-size: 16px;
        height: 100%;
    }

    .postcard__tagbox {
        display: flex;
        flex-flow: row wrap;
        font-size: 14px;
        margin: 20px 0 0 0;
        padding: 0;
        justify-content: center;
        

    .tag__item {
      display: inline-block;
      background: transparent;
      border: solid #bd150b;
      border-radius: 10px;
      padding: 3px 10px;
      margin: 0 5px 5px 0;
      cursor: default;
      user-select: none;
    }
  }
}

.postcard .postcard__tagbox .red.play:hover {
	background: #bd150b;
}

@media screen and (min-width: 765px) {
  .postcard {
    flex-wrap: inherit;
    width: 750px;

    .postcard__title {
      font-size: 26px;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      width: 300px;
      max-height: 100%;
      transition: transform 0.3s ease;
    }

    .postcard__text {
      padding: 3rem;
      width: 100%;
    }

    .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: #18151f;
      top: -20%;
      height: 130%;
      width: 55px;
    }

    &:nth-child(2n+1) {
      flex-direction: row;
    }

    &:nth-child(2n+0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n+1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n+0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}

@media screen and (min-width: 1024px){
    .postcard{
        width: 950px;
    }
		.postcard__text {
      padding: 2rem 3.5rem;
    }
	
  .postcard.dark {
		.postcard__text:before {
			background: #18151f;
		}
  }
}

.red .postcard__bar {
	background-color: #bd150b;
}
.red::before {
	background-image: linear-gradient(-30deg, rgba(189, 21, 11, 0.1));
}
.red:nth-child(2n)::before {
	background-image: linear-gradient(30deg, rgba(189, 21, 11, 0.1));
}

@media screen and (min-width: 769px) {
    .red::before {
		background-image: linear-gradient(-80deg, rgba(189, 21, 11, 0.1));
	}
	.red:nth-child(2n)::before {
		background-image: linear-gradient(80deg, rgba(189, 21, 11, 0.1));
	}
}
`


export default ProgrammingProjects;