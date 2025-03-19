import React from "react";
import OurFacilities from "../OurFacilities/OurFacilities";

function HomeFacilities() {
    return (
        <section className="our-facility">
            <div className="container">
                <div className="row">
                    <h2>Our Facilities</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OurFacilities />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeFacilities;
