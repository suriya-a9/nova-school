import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-1">
                            <img src={'/nova-school/assets/Footer.webp'} alt="img" />
                            <div className="footer-1-contact">
                                <h4>Talk with us</h4>
                                <div className="footer-1-contact-div">
                                    <FiPhone /> 0422-2331091
                                </div>
                                <div className="footer-1-contact-div">
                                    <FiPhone /> 0422-4378975
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-2">
                            <div className="footer-2-quick-links">
                                <h4>Quick Links</h4>
                                <ul className="footer-ul">
                                    <li>About Us</li>
                                    <li>Academics</li>
                                    <li>Faculty</li>
                                    <li>Facilities</li>
                                    <li>Activities</li>
                                    <li>Gallery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-3">
                            <div className="footer-2-quick-links">
                                <h4>Our Institution</h4>
                                <ul className="footer-ul">
                                    <li>Nova College of Education</li>
                                    <li>Nova Teacher Training</li>
                                    <li>Nova Public School</li>
                                    <li>Nova Flinto Play School</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-4">
                            <div className="footer-4-quick-links">
                                <h4>Contact US</h4>
                                <p>Selvapuram Jothipuram Post, Coimbatore, Tamilndau, India - 641047</p>
                                <p>Admission: +91 9360005013</p>
                                <p>Working Hours: 8am-10pm</p>
                                <p>Sunday (closed)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer-social-icons">
                        <div className="icon-div">
                            <FaXTwitter />
                        </div>
                        <div className="icon-div">
                            <FaFacebookF />
                        </div>
                        <div className="icon-div">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer-copy-rights">
                        <p>@ 2025 Nova Education. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;