import React, { useState } from "react";
import "./NovaInstitution.css";

const tabs = [
    { id: 1, title: "Nova College of Education", image: "/assets/Card-Processing-Solutions-Featured-Image.webp", content: "Empowering Students to Attain and Maintain Extraordinary Education. Spearheaded by experienced...", sub_content: "Admissions Open from all education courses", url: "/" },
    { id: 2, title: "Nova Teacher Training School", image: "/assets/Card-Processing-Solutions-Featured-Image.webp", content: "Empowering Students to Attain and Maintain Extraordinary Education. Spearheaded by experienced...", sub_content: "Admissions Open from all education courses", url: "/" },
    { id: 3, title: "Nova Public School", image: "/assets/Card-Processing-Solutions-Featured-Image.webp", content: "Empowering Students to Attain and Maintain Extraordinary Education. Spearheaded by experienced...", sub_content: "Admissions Open from all education courses", url: "/" },
    { id: 4, title: "Nova Flinto Play School", image: "/assets/Card-Processing-Solutions-Featured-Image.webp", content: "Empowering Students to Attain and Maintain Extraordinary Education. Spearheaded by experienced...", sub_content: "Admissions Open from all education courses", url: "/" },
];

const NovaInstitution = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="nova-institution">
            <div className="container">
                <div className="row">
                    <h2 className="nova-institute-heading">Nova Institution</h2>
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
                                        <div key={tab.id} className="content">
                                            <img src={tab.image} alt={tab.title} className="tab-image" />
                                            <p>{tab.content}</p>
                                            <p className="sub_content">{tab.sub_content}</p>
                                            <a href={tab.url}>Know More</a>
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

export default NovaInstitution;