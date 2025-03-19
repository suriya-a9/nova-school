import React from "react";
import TabTable from "./TabTable";

const FacultyList = () => {
    return (
        <section className="faculty-list">
            <div className="container">
                <div className="row">
                    <h2>Faculty Details</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="faculty-list-div">
                        <TabTable />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacultyList;