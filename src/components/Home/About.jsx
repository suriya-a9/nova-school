import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="home-about">
            <div className="container">
                <div className="row">
                    <div className="home-about-heading">
                        <h2>About Nova Education</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="home-about-content">
                            <p>Nova College  of Education, Coimbatore, was established  by Alfa Education Trust in the academic year 2008, with the vision of Mr.A.Ragasammy, whose cherished dream was to start a  College  of  Education to achieve high ideals for future teachers. It is situated in a sprawling campus of 5 acres in the Coimbatore which in many ways is surrounded by a natural eco system.</p>
                            <p>Over a period of nine years, totally dedicated to the cause of Education, Nova College of Education has made tremendous contributions to the society by finding out a new cader of teachers who could imbible a good value system, self-confident self-reliant in the future generation through focused, planned and research based innovations</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="vision">
                            <div className="vision-img">
                                <img src={'assets/Vision.webp'} alt="img" />
                            </div>
                            <div className="vision-content">
                                <h4>Our Vision</h4>
                                <p>We at Nova empowers child ambience with numerous learning opportunities and best teaching practices...</p>
                                <a href="#">Read More {">"}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mission">
                            <div className="mission-img">
                                <img src={'assets/Mission.webp'} alt="img" />
                            </div>
                            <div className="mission-content">
                                <h4>Our Mission</h4>
                                <p>We at Nova empowers child ambience with numerous learning opportunities and best teaching practices...</p>
                                <a href="#">Read More {">"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;