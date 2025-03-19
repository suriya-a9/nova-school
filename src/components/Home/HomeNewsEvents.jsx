import React from "react";
import NewsEvents from "../NewsEvents/NewsEvents";

function HomNewsEvents() {
    return (
        <section className="our-facility">
            <div className="container">
                <div className="row">
                    <h2>News & Events</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NewsEvents />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomNewsEvents;
