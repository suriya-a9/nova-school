import React from "react";
import "./Cta.css";

const Cta = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cta-div">
                            <h2>Finding Your Right Courses</h2>
                            <p>Use the list below to bring attention to your product's key differentiator</p>
                            {/* <div className='header-contact-div'> */}
                                <button className='cta-button'>Join Now</button>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta;