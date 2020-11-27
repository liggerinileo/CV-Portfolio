import React from 'react';
import '../../assets/styles/components/Courses.css'; 

const Education = props => {  
    
    return (  

        <div className="single-card mt-4 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 all mockup text-center">
            <div className="col-12 mt-2 relative">
                <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img className="img-fluid" src={props.src} alt={props.title} />
                </div>                               
            </div>
            <div className={props.tit}>
                <h2>{props.title}</h2>
            </div> 
            <div className={props.styleIcon}>
                <a href={props.certificate} target="blank" className={props.linkGit}><img src={props.degree} alt="Github Icon"/></a>
            </div>                                          
        </div>   

            
    )
};


export default Education;