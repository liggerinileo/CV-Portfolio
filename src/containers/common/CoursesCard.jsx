import React from 'react';
import '../../assets/styles/components/Courses.css'; 

const Education = ({ children }) => (
    <section className="container-fluid contain mt-3">
        <div className="filters-content">
            <div className="row">
                {children}
            </div>
        </div>
    </section>
);

export default Education;