import React, { Fragment } from 'react';

import PortfolioItem from "../common/PortfolioItem";
import PortfolioPage from "../common/PortfolioPage";
import Header from '../common/Header';

import '../../assets/styles/App.css';

import githubIcon from '../../assets/static/github-brands.svg';
import ghpagesIcon from '../../assets/static/web.svg';

import imgRolling from '../../assets/static/rs.jpg';
import imgMovies from '../../assets/static/movies.png';
import imgTravel from '../../assets/static/travel.jpg';


const Portfolio = () => (
    <Fragment>
        <Header />
            <PortfolioPage>
                <PortfolioItem 
                    src={imgRolling}
                    title="The Rolling Stones"
                    repo="https://github.com/liggerinileo/tpeWebII"
                    ghpages="https://liggerinileo.github.io/TheRollingStones/"
                    gitIcon={githubIcon}
                    websiteIcon={ghpagesIcon}
                />
                <PortfolioItem 
                    src={imgMovies}
                    title="Lifetime Movies"
                    repo="https://github.com/liggerinileo/LifetimeMovies"
                    ghpages="https://liggerinileo.github.io/LMImages/"
                    gitIcon={githubIcon}
                    websiteIcon={ghpagesIcon}
                />
                <PortfolioItem 
                    src={imgTravel}
                    title="Agencia de Viajes"
                    repo="https://github.com/liggerinileo/Agencia-de-Viajes"
                    ghpages="https://liggerinileo.github.io/AViajes-UI/"
                    gitIcon={githubIcon}
                    websiteIcon={ghpagesIcon}
                />
            </PortfolioPage>
    </Fragment>
)


export default Portfolio;