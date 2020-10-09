import React, { Fragment } from 'react';

import '../../assets/styles/App.css';
import '../../assets/styles/components/Header.css';
import '../../assets/styles/components/Home.css'; 

import fondo from '../../assets/static/fondo.png';
import githubIcon from '../../assets/static/github-brands.svg';
import linkedIn from '../../assets/static/linkedin.svg';
import email from '../../assets/static/email.svg';
import city from '../../assets/static/city.svg';
import student from '../../assets/static/student.svg';

import Header from '../common/Header';



const Home = () => (
    <Fragment>
        <Header />
        <div className="container cont">
            <div className="row">
                <div className="imgFondo col-md-6 col-lg-6 col-xl-6 mt-4 text-center">
				  <img src={fondo} alt="Fondo" className="img-fluid rounded-circle mb-1"  />
				  <h2 className="mb-4">Leandro Ariel Liggerini</h2>
				</div>
				<div className="datos col-md-6 col-lg-6 col-xl-6 text-center">
					<p className="mb-3"><span className="studentLink"><img src={student} alt="Student"/> </span>Estudiante de Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas, UNICEN</p>
					<p><span className="cityLink"><img src={city} alt="City"/> </span>Tandil, Buenos Aires, Argentina</p>
                    <p><span className="emailLink"><img src={email} alt="Email"/> </span>liggerinileo@gmail.com</p>
					<p className="mt-5">
						<a href="https://github.com/liggerinileo" target="blank" className="linkGit pl-0 pr-3"><img src={githubIcon} alt="Github Icon"/></a>
						<a href="https://www.linkedin.com/in/leandro-liggerini-5a610014a/" target="blank" className="linkLinkdin pl-3 pr-3"><img src={linkedIn} alt="LinkedIn Icon"/></a>
					</p>
				</div>
            </div>
        </div>
    </Fragment>
)


export default Home;