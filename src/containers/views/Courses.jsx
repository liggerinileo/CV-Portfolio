import React, { Fragment } from 'react';


import EducationItem from "../common/CoursesItem";
import EducationCard from "../common/CoursesCard";
import Header from '../common/Header';

import collegeDegree from '../../assets/static/bachelors-degree.svg';

import imgUdemy from '../../assets/static/jsUdemy.jpg';
import imgJs from '../../assets/static/jspro.jpg';
import imgReact from '../../assets/static/reactjs.jpg';
import imgReactPr from '../../assets/static/reactPractico.jpg';
import imgRedux from '../../assets/static/redux.jpg';
import imgRouter from '../../assets/static/reactRouter.jpg';
import imgRouYRed from '../../assets/static/routerRedux.jpg';
import imgNative from '../../assets/static/reactNative.jpg';
import imgTesting from '../../assets/static/testing.jpg';


const Education = () => (
    <Fragment>
        <Header />
        <EducationCard>
            <EducationItem 
                tit="col-12 title1 p-inner text-center"
                styleIcon="col-12 icon1 p-inner text-center"
                src={imgUdemy}
                title="Curso JavaScript Moderno"
                certificate="https://www.udemy.com/certificate/UC-0e14db18-a5b3-4bf5-b0aa-ca2ed74dffa4/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon p-inner text-center"
                src={imgJs}
                title="Curso Profesional de JavaScript"
                certificate="https://platzi.com/@leandroliggerini/curso/1642-course/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem
                tit="col-12 title p-inner mt-2 text-center" 
                styleIcon="col-12 icon3 p-inner text-center"
                src={imgReact}
                title="Curso de React JS"
                certificate="https://platzi.com/@leandroliggerini/curso/1548-react/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />

            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon p-inner text-center"
                src={imgReactPr}
                title="Curso Practico de React JS"
                certificate="https://platzi.com/@leandroliggerini/curso/1651-react-ejs/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon p-inner text-center"
                src={imgRedux}
                title="Curso de React Redux por Bedu"
                certificate="https://platzi.com/@leandroliggerini/curso/1613-redux/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon3 p-inner text-center"
                src={imgRouter}
                title="Curso de React Router"
                certificate="https://platzi.com/@leandroliggerini/curso/1342-react-router/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />

            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon p-inner text-center"
                src={imgRouYRed}
                title="Curso de React Router y Redux"
                certificate="https://platzi.com/@leandroliggerini/curso/1652-react-router-redux/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem 
                tit="col-12 title p-inner mt-2 text-center"
                styleIcon="col-12 icon3 p-inner text-center"
                src={imgNative}
                title="Curso de React Native"
                certificate="https://platzi.com/@leandroliggerini/curso/1292-react-native-old/diploma/detalle/"
                degree={collegeDegree}
                linkGit="linkGit"
            />
            <EducationItem 
                tit="col-12 title3 p-inner text-center"
                styleIcon="col-12 icon p-inner text-center"
                src={imgTesting}
                title="Professional Testing Master"
                certificate={imgTesting}
                degree={collegeDegree}
                linkGit="linkGit"
            />
        </EducationCard>
    </Fragment>
)


export default Education;