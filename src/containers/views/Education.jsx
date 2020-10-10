import React, { Fragment } from 'react';

import '../../assets/styles/components/Header.css';
import '../../assets/styles/components/Education.css';

import school from '../../assets/static/school.svg';
import books from '../../assets/static/libros.svg';

import Header from '../common/Header';



const Education = () => (
    <Fragment>
        <Header />
        <div className="container cont">
            <div className="row">
                <div className="imgFondo col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-5 text-center">
                    <h3><span className="schoolLink"><img src={school} alt="School"/> </span>Colegio Sagrada Familia, Tandil</h3>
                    <h5>Economia y Gestión de las Organizaciones</h5>
				</div>
                <div className="imgFondo col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-5 text-center">
                    <h3><span className="collegeLink"><img src={books} alt="School"/> </span>Universidad Nacional de Mar del Plata</h3>
                    <h5>2011 - 2014 || Arquitectura</h5>
				</div>
                <div className="imgFondo col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-5 text-center">
                    <h3><span className="collegeLink"><img src={books} alt="School"/> </span>Universidad Nacional del Centro de la Provincia de Bs.As.</h3>
                    <h5>2018 - Presente || Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas</h5>
				</div>
            </div>
        </div>
    </Fragment>
)


export default Education;