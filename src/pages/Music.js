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
            {/* <figure>
                <iframe title={card.title} src={card.video} alt={card.title}
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                <figcaption> 
                <span>{card.title}</span>
                <div className="description">{card.description}</div>
                <a href={card.video}><button>Check it Out!</button></a>
                </figcaption>
            </figure> */}
            <section className="dark"> 
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">{card.title}</h1>

                    <article className="postcard dark red">
                        <div className="postcard__text">
                            <h1 className="postcard__title red">{card.title}</h1>
                            <div className="postcard__bar"></div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item play red">
                                    <a href={card.link}><i className="fas fa-play mr-2"></i>Watch on Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <iframe className="postcard__img" title={card.title} src={card.video} alt={card.title}
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                    </article>
                </div>
            </section>
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

    .head-text{
        font-size: 40px;
        text-align: center;
        margin: 30px;
    }
    
    .postcard {
        flex-wrap: wrap;
        margin: auto;
        background: linear-gradient(to bottom right, #202030, #300000);
        
        box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
        border-radius: 10px;
        align-items: center;
        overflow: hidden;
        color: #ffffff;
        width: 80%;
        flex-direction: row-reverse;
        padding: 10px;
        
    a {
        color: inherit;
        text-decoration: none;
    }

    .postcard__title {
      font-size: 22px;
    }
    .postcard__img {
        object-fit: cover;
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
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
       
        text-align: justify;
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
    margin: auto;
    padding: 10px;

    .postcard__title {
      font-size: 26px;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      height: 100%;
      padding: 10px;
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

export default Music;