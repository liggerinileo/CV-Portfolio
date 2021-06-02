import React, { Fragment } from 'react';

import '../../assets/styles/components/Header.css';
import '../../assets/styles/components/Work.css';

import work from '../../assets/static/work.png';

import Header from '../common/Header';



const Education = () => (
    <Fragment>
        <Header />
        <div className="container cont">
            <div className="row">
                <div className="imgFondo col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-5 text-center">
                    <h3><span className="workLink"><img src={work} alt="School"/> </span>Blitz IT S.A.</h3>
                    <h4>Desarrollador Full Stack</h4>
                    <h4>01 de Marzo del 2021 - Presente</h4>
				</div>
            </div>
        </div>
    </Fragment>
)


export default Education;