import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import '../../assets/styles/components/Header.css';


const Header = () => (

        <Fragment>
            <header className="navbar navbar-expand-lg site-navbar navbar-light " id="pb-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
				        <span className="navbar-toggler-icon"></span>
			        </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-1">
                                <NavLink
                                    exact
                                    activeClassName="selected" 
                                    className="nav-link" 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item mr-1  ml-1">
                                <NavLink 
                                    exact
                                    activeClassName="selected" 
                                    className="nav-link" 
                                    to="/portfolio"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item ml-1">
                                <NavLink 
                                    exact
                                    activeClassName="selected" 
                                    className="nav-link" 
                                    to="/education"
                                >
                                    Educación
                                </NavLink>
                            </li>
                            <li className="nav-item ml-1">
                                <NavLink 
                                    exact
                                    activeClassName="selected" 
                                    className="nav-link" 
                                    to="/work"
                                >
                                    Experiencia
                                </NavLink>
                            </li>
                            <li className="nav-item ml-1">
                                <NavLink 
                                    exact
                                    activeClassName="selected" 
                                    className="nav-link" 
                                    to="/courses"
                                >
                                    Cursos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </Fragment>
        
        
   

);
    

export default Header;