import React from "react";
import "./Journey.css";

const Journey = () => {
    return (
        <section className="journey-section">
            <div className="container">
                <div className="row">
                    <h2>Start your Learning Journey Today!</h2>
                </div>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="journey-section-div">
                                    <div className="journey-content-div">
                                        <img src={'assets/Learn (1).webp'} alt="img" />
                                        <h4>Learn with Experts</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="journey-section-div">
                                    <div className="journey-content-div">
                                        <img src={'assets/Industrial.webp'} alt="img" />
                                        <h4>Learn with Experts</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="journey-section-div">
                                    <div className="journey-content-div">
                                        <img src={'assets/Learn.webp'} alt="img" />
                                        <h4>Learn with Experts</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="journey-section-div">
                                    <div className="journey-content-div">
                                        <img src={'assets/Flexible.webp'} alt="img" />
                                        <h4>Learn with Experts</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;