"use client";
import React, { useState } from "react";
import layout_slv from "../layout_slv.png";

const BlogDetail = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row g-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="card shadow border-0 mb-4 rounded-4 overflow-hidden">
                            <img
                                src={layout_slv}
                                className="card-img-top"
                                alt="YMR 5 Township Layout"
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body p-4">
                                <h1 className="text-primary fw-bold mb-2">YMR 5<span className="text-blue">▼</span> Township</h1>
                                <h5 className="text-muted mb-3">SLV Builders & Developers</h5>
                                <p className="text-secondary mb-4">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    Beside TV9 Colony, Opp. Kadambari Township, Thandrapadu Village, Kurnool
                                </p>
                                <p className="text-secondary mb-4">
                                    <i className="fas fa-rupee-sign me-2"></i>
                                    All Bank Loans Available
                                </p>
                                <div className="d-flex justify-content-between mb-4">
                                    <div>
                                        <h4 className="text-success mb-0">₹11,000</h4>
                                        <small className="text-muted">Per Sqft</small>
                                    </div>
                                    <div>
                                        <h4 className="text-info mb-0">120–300+</h4>
                                        <small className="text-muted">Sq. Yards</small>
                                    </div>
                                </div>

                                <div className="row text-center g-3 mb-4">
                                    {[
                                        { label: "Layout", value: "5.59 Acres", icon: "📐" },
                                        { label: "Approvals", value: "KUDA, CREDAI", icon: "🏷️" },
                                        { label: "Type", value: "Residential Plots", icon: "🏡" },
                                        { label: "Rupee", value: "Loans Available", icon: "🟢" },
                                    ].map((item, i) => (
                                        <div className="col-6 col-md-3" key={i}>
                                            <div className="bg-white shadow-sm rounded p-3">
                                                {item.icon}<br />
                                                <small className="text-muted">{item.label}</small>
                                                <div className="fw-bold">{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="text-dark fw-bold mb-3">Project Highlights</h4>
                                <ul className="list-group list-group-flush mb-3">
                                    {[
                                        "100% Vastu",
                                        "DTCP Layout",
                                        "Clear Title",
                                        "40’ & 33’ Wide Blacktop Roads",
                                        "Underground Drainage",
                                        "Avenue Plantation",
                                        "Electricity",
                                        "Street Lights",
                                        "Children’s Play Area",
                                        "Gated Community",
                                        "Overhead Water Tank",
                                        "Entrance Arch with Gate",
                                    ].map((item, idx) => (
                                        <li className="list-group-item" key={idx}>
                                            <i className="fas fa-check text-success me-2"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="btn btn-outline-primary btn-sm mb-4"
                                >
                                    {showFullDescription ? "Show Less" : "Show More"}
                                </button>

                                {showFullDescription && (
                                    <>
                                        <h4 className="text-dark fw-bold mb-3">Location Highlights</h4>
                                        <ul className="list-group list-group-flush mb-3">
                                            {[
                                                "Near Thandrapadu Village Layout",
                                                "Close to Kurnool Airport",
                                                "Near Kadambari Township",
                                                "Near TV9 Temple",
                                                "Close to Kurnool - Nandyal Highway (NH-40)",
                                                "15 Mins to Kurnool City",
                                                "Close to Engineering & Medical Colleges",
                                                "Close to Schools, Hospitals & Commercial Areas",
                                            ].map((item, idx) => (
                                                <li className="list-group-item" key={idx}>
                                                    <i className="fas fa-map-pin text-danger me-2"></i>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Schedule a Tour */}
                    <div className="col-lg-4">
                        <div className="card shadow-lg border-0 rounded-4 bg-white">
                            <div className="card-body p-4">
                                <h4 className="fw-bold text-primary mb-3">
                                    <i className="fas fa-calendar-check me-2"></i>
                                    Schedule a Tour
                                </h4>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">Date</label>
                                        <input type="date" className="form-control" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Time</label>
                                        <select className="form-select" required>
                                            <option value="">Select Time</option>
                                            <option>9:00 AM</option>
                                            <option>11:00 AM</option>
                                            <option>2:00 PM</option>
                                            <option>4:00 PM</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Phone</label>
                                        <input type="tel" className="form-control" placeholder="Phone Number" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email Address" required />
                                    </div>
                                    <div className="col-12 text-center mt-3">
                                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Request Tour
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Location Map - Full Width */}
                    <div className="col-12 mt-5">
                        <div className="container-fluid px-0">
                            <h4 className="text-dark fw-bold mb-3 text-center">Location Map</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3839.01777598934!2d78.08440507513026!3d15.803016684838546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ4JzEwLjkiTiA3OMKwMDUnMTMuMSJF!5e0!3m2!1sen!2sin!4v1749109600277!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="YMR 5 Township Map"
                            ></iframe>
                        </div>
                    </div>

                    <div className="container my-5">
                        <h3 className="text-center mb-5 fw-bold text-primary">
                            YMR 5<span className="text-blue">▼</span> Venture Plot Sizes & Pricing
                        </h3>

                        <div className="row g-4 justify-content-center">
                            {[
                                { face: "EAST", size: "30 x 55", price: "₹20,00,000/-" },
                                { face: "EAST", size: "33 x 55", price: "₹22,00,000/-" },
                                { face: "WEST", size: "30 x 55", price: "₹18,00,000/-" },
                                { face: "WEST", size: "33 x 55", price: "₹20,00,000/-" },
                            ].map((plot, index) => (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="card border-0 shadow-lg rounded-4 h-100">
                                        <div className="card-body text-center py-4 px-3">
                                            <span className="badge bg-gradient bg-primary text-white px-4 py-2 mb-3 rounded-pill fs-6">
                                                {plot.face} FACING
                                            </span>
                                            <h5 className="card-title mb-2 text-dark fw-semibold">
                                                Plot Size
                                            </h5>
                                            <h4 className="text-info fw-bold">{plot.size}</h4>
                                            <div className="border-top mt-3 pt-3">
                                                <p className="mb-0 text-secondary small">Starting from</p>
                                                <h5 className="text-success fw-bold">{plot.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="alert alert-warning text-center mt-5 fw-semibold fs-6 rounded-3 shadow-sm">
                            <i className="fas fa-info-circle me-2"></i>
                            Note: Remaining corner plots and different sized plots are priced differently.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
