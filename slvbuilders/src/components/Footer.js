import React from "react";
import slv_logo from "../slv_logo.jpg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    {/* Company Overview & Social Media */}
                    <div className="col-lg-3 col-md-6">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                                <img src={slv_logo} alt="SLV Builders Logo" width="100px" className="logo" />
                            </div>
                        </Link>

                        <span className="footer-other-text d-block">
                            SLV Builders & Developers is a trusted real estate developer in Kurnool, committed to excellence in constructing quality homes and commercial spaces.
                        </span>
                        <div className="footer-social">
                            <div className="footer-social-item">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div className="footer-social-item">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="footer-social-item">
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>

                    {/* Menu Links */}
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul list-unstyled">
                            <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/properties" className="text-light text-decoration-none">Properties</a></li>
                            <li><a href="/about" className="text-light text-decoration-none">About</a></li>
                            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>


                    {/* Projects/Categories */}
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Projects</p>
                        <ul className="footer-ul">
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Industrial</li>
                            <li>Community</li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Contact</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <span>Mon-Fri: 08:00-18:00</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <span>slvbuilderskurnool@gmail.com</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span>
                                    Plot No.33, Shirdi Sai Nagar, Joharapuram Road, Kurnool, A.P.
                                </span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
