import React, { useState } from "react";
import "./FacilitiesList.css";

const FacilitiesList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // PDF Data
    const pdfs = [
        {
            id: "trustDeed",
            title: "Trust Deed",
            thumbnail: "/nova-school/assets/favicon.webp",
            pdfUrl: "/nova-school/assets/Trust-deed.pdf",
        },
        {
            id: "novaSchool",
            title: "Nova School",
            thumbnail: "/nova-school/assets/favicon.webp",
            pdfUrl: "/nova-school/assets/Nova-school.pdf",
        },
        {
            id: "schoolStability",
            title: "School Stability",
            thumbnail: "/nova-school/assets/favicon.webp",
            pdfUrl: "/nova-school/assets/school-stability.pdf",
        },
        {
            id: "waterReport",
            title: "Water Report",
            thumbnail: "/nova-school/assets/favicon.webp",
            pdfUrl: "/nova-school/assets/water-report.pdf",
        },
        {
            id: "fireSchool",
            title: "Fire School",
            thumbnail: "/nova-school/assets/favicon.webp",
            pdfUrl: "/nova-school/assets/fire-school.pdf",
        },
        {
            id: "calendar",
            title: "Calendar",
            thumbnail: "/nova-school/assets/facilities-calendar.webp",
            pdfUrl: "/nova-school/assets/facilities-calendar.webp",
        },
    ];

    return (
        <section className="facilities-list p-4">
            <div className="container">
                <div className="row">
                    {pdfs.map((pdf, index) => (
                        <div className="col-md-3" key={pdf.id}>
                            <div className="facilities-pdf text-center">
                                <div
                                    className="pdf-thumbnail border p-2 d-inline-block position-relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <p className="pdf-sub-text">PDF</p>
                                    <img src={pdf.thumbnail} alt="PDF Thumbnail" width={150} />
                                    {hoveredIndex === index && (
                                        <button
                                            className="btn btn-primary position-absolute top-50 start-50 translate-middle pdf-button"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#${pdf.id}Modal`}
                                        >
                                            See PDF
                                        </button>
                                    )}
                                </div>
                                <h5>{pdf.title}</h5>
                            </div>

                            {/* Bootstrap Modal for each PDF */}
                            <div className="modal fade" id={`${pdf.id}Modal`} tabIndex="-1" aria-labelledby={`${pdf.id}ModalLabel`} aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`${pdf.id}ModalLabel`}>{pdf.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <iframe src={pdf.pdfUrl} width="100%" height="600px" title="PDF Viewer"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesList;
