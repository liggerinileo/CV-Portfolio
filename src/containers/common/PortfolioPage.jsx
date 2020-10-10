import React from 'react';
import '../../assets/styles/components/Portfolio.css'; 

const Portfolio = ({ children }) => (
    <section className="container-fluid grid mt-3">
        <div className="filters-content">
            <div className="row">
                {children}
            </div>
        </div>
    </section>
);

export default Portfolio;