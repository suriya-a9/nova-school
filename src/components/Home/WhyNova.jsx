import React from "react";
import "./WhyNova.css";
import { FaUserGraduate } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { GrBook } from "react-icons/gr";

const WhyNova = () => {
    return (
        <section className="why-nova-section">
            <div className="container">
                <div className="row">
                    <h2>Why Nova Education?</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="why-nova-left">
                            <img src={'assets/why.webp'} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="why-nova-right">
                            <div className="why-nova-div">
                                <div className="why-nova-div-img">
                                    <GrBook />
                                </div>
                                <div className="why-nova-div-content">
                                    <h4>Select a course You Like <br />And Explore It!</h4>
                                    <p>Starting from Kinder Garden - Public Schooling - D.TEd - B.Ed</p>
                                </div>
                            </div>
                            <div className="why-nova-div">
                                <div className="why-nova-div-img">
                                    <TbWorldWww />
                                </div>
                                <div className="why-nova-div-content">
                                    <h4>Visit Nova To Know More <br />About It!</h4>
                                    <p>We are Always Open to Answer your Queries</p>
                                </div>
                            </div>
                            <div className="why-nova-div">
                                <div className="why-nova-div-img">
                                    <FaUserGraduate />
                                </div>
                                <div className="why-nova-div-content">
                                    <h4>Nova Brings Value Based<br />Education In Everyone</h4>
                                    <p>Nova Brings Value Based Education In Everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNova;
