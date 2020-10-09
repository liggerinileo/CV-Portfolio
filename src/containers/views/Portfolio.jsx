import React, { Fragment } from 'react';

import '../../assets/styles/App.css';
import '../../assets/styles/components/Portfolio.css'; 

import githubIcon from '../../assets/static/github-brands.svg';
import ghpagesIcon from '../../assets/static/web.svg';

import imgRolling from '../../assets/static/rs.jpg';
import imgMovies from '../../assets/static/movies.png';
import imgTravel from '../../assets/static/travel.jpg';

import Header from '../common/Header';



const Portfolio = () => (
    <Fragment>
        <Header />
        
            <div className="container-fluid grid mt-3">

                <div className="filters-content">
                    <div className="row">

                        {/* -----------Rolling--------------- */}
                        <div className="single-portfolio mt-4 col-4 col-xs-12 all mockup text-center">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="imageRs img-fluid" src={imgRolling} alt="" />
                                </div>                               
                            </div>
                            <div className="title p-inner mt-2">
                                <h2 className="mb-3">The Rolling Stones</h2>
                                <a href="https://github.com/liggerinileo/tpeWebII" target="blank" className="linkGit pl-0 pr-3"><img src={githubIcon} alt="Github Icon"/></a>
                                <a href="https://liggerinileo.github.io/TheRollingStones/" target="blank" className="linkGit pl-0 pr-3"><img src={ghpagesIcon} alt="Github Icon"/></a>
                            </div>                                         
                        </div>

                        {/* -----------Movies--------------- */}
                        <div className="single-portfolio mt-4 col-4 col-xs-12 all mockup text-center">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="imageMov img-fluid" src={imgMovies} alt="" />
                                </div>                                
                            </div>
                            <div className="title p-inner mt-2">
                                <h2 className="mb-3">Lifetime Movies</h2>
                                <a href="https://github.com/liggerinileo/LifetimeMovies" target="blank" className="linkGit pl-0 pr-3"><img src={githubIcon} alt="Github Icon"/></a>
                                <a href="https://liggerinileo.github.io/LMImages/" target="blank" className="linkGit pl-0 pr-3"><img src={ghpagesIcon} alt="Github Icon"/></a>
                            </div>                                         
                        </div>  

                        {/* -----------Travel Agency--------------- */}
                        <div className="single-portfolio mt-4 col-4 col-xs-12 all mockup text-center">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="imageTr img-fluid" src={imgTravel} alt="" />
                                </div>	
                            </div>
                            <div className="title p-inner mt-2">
                                <h2 className="mb-3">Agencia de Viajes</h2>
                                <a href="https://github.com/liggerinileo/Agencia-de-Viajes" target="blank" className="linkGit pl-0 pr-3"><img src={githubIcon} alt="Github Icon"/></a>
                                <a href="https://liggerinileo.github.io/AViajes-UI/" target="blank" className="linkGit pl-0 pr-3"><img src={ghpagesIcon} alt="Github Icon"/></a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        
	
    </Fragment>
)


export default Portfolio;