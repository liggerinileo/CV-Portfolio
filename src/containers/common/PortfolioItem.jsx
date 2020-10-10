import React from 'react';
import '../../assets/styles/components/Portfolio.css'; 

const Portfolio = props => {  
    
    return (  

        <div className="single-portfolio mt-4 col-xs-12 all mockup text-center">
            <div className="relative mt-4 ">
                <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img className="img-fluid" src={props.src} alt={props.title} />
                </div>                               
            </div>
            <div className="title p-inner mt-3">
                <h2 className="mb-3">{props.title}</h2>
                <a href={props.repo} target="blank" className="linkGit pl-0 pr-3"><img src={props.gitIcon} alt="Github Icon"/></a>
                <a href={props.ghpages} target="blank" className="linkGit pl-0 pr-3"><img src={props.websiteIcon} alt="Github Icon"/></a>
            </div>                                         
        </div>
            
    )
};


export default Portfolio;