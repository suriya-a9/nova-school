import React, { useState } from "react";
import "../../components/Home/NovaInstitution.css";
import "./AboutUsTab.css";

const tabs = [
    { id: 1, title: "Nova College of Education", image: "/nova-school/assets/about-us-tab.webp", content1: "Nova College of Education, Coimbatore, was established by Alfa Education Trust in the academic year 2008, with the vision of Mr.A.Rangasamy, whose cherished dream was to start a College of Education to achieve high ideals for future teachers.", content2: "It is situated in a sprawling campus of 5 acres in the Coimbatore which in many ways is surrounded by a natural eco system. Over a period of nine years, totally dedicated to the cause of Education, Nova College of Education has made tremendous contributions to the society by finding out a new cader of teachers who could imbibe a good value system, self-confident, self-reliant in the future generation through focused, planned and research based innovations.", url: "/" },
    { id: 2, title: "Nova Teacher Training Institute", image: "/nova-school/assets/about-us-tab.webp", content1: "Nova College of Education, Coimbatore, was established by Alfa Education Trust in the academic year 2008, with the vision of Mr.A.Rangasamy, whose cherished dream was to start a College of Education to achieve high ideals for future teachers.", content2: "It is situated in a sprawling campus of 5 acres in the Coimbatore which in many ways is surrounded by a natural eco system. Over a period of nine years, totally dedicated to the cause of Education, Nova College of Education has made tremendous contributions to the society by finding out a new cader of teachers who could imbibe a good value system, self-confident, self-reliant in the future generation through focused, planned and research based innovations.", url: "/" },
    { id: 3, title: "Nova Public School", image: "/nova-school/assets/about-us-tab.webp", content1: "Nova College of Education, Coimbatore, was established by Alfa Education Trust in the academic year 2008, with the vision of Mr.A.Rangasamy, whose cherished dream was to start a College of Education to achieve high ideals for future teachers.", content2: "It is situated in a sprawling campus of 5 acres in the Coimbatore which in many ways is surrounded by a natural eco system. Over a period of nine years, totally dedicated to the cause of Education, Nova College of Education has made tremendous contributions to the society by finding out a new cader of teachers who could imbibe a good value system, self-confident, self-reliant in the future generation through focused, planned and research based innovations.", url: "/" },
    { id: 4, title: "Nova Flinto Play School", image: "/nova-school/assets/about-us-tab.webp", content1: "Nova College of Education, Coimbatore, was established by Alfa Education Trust in the academic year 2008, with the vision of Mr.A.Rangasamy, whose cherished dream was to start a College of Education to achieve high ideals for future teachers.", content2: "It is situated in a sprawling campus of 5 acres in the Coimbatore which in many ways is surrounded by a natural eco system. Over a period of nine years, totally dedicated to the cause of Education, Nova College of Education has made tremendous contributions to the society by finding out a new cader of teachers who could imbibe a good value system, self-confident, self-reliant in the future generation through focused, planned and research based innovations.", url: "/" },
];

const AboutUsTab = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="nova-institution" id="about-us-tab">
            <div className="container">
                <div className="row">
                    <h2 className="nova-institute-heading">About Nova Education</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="nova-tab">
                            <div className="tabs">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        className={activeTab === tab.id ? "tab active" : "tab"}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                            <div className="tab-content">
                                {tabs.map(tab => (
                                    activeTab === tab.id && (
                                        <div key={tab.id} className="row content">
                                            <div className="col-md-6">
                                                <img src={tab.image} alt={tab.title} className="tab-image" />
                                            </div>
                                            <div className="col-md-6">
                                                <h3>{tab.title}</h3>
                                                <p>{tab.content1}</p>
                                                <p className="sub_content">{tab.content2}</p>
                                                <a href={tab.url} className="btn btn-primary">Know More</a>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTab;