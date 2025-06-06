import React from "react";
import ImageGallery from 'react-image-gallery';

const FlatDetail = () => {
    const images = [
        {
            original: '/img/product1.jpeg',
            thumbnail: '/img/product1.jpeg',
        },
        {
            original: '/img/banner.jpg',
            thumbnail: '/img/banner.jpg',
        },
        {
            original: '/img/product1.jpeg',
            thumbnail: '/img/product1.jpeg',
        },
    ];

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">Premium 3BHK Villa Plot</h1>
                    <h4 className="text-muted">Located in YMR 5 Township, Kurnool</h4>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="border p-3 bg-white shadow-sm rounded mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                                <div>
                                    <h4 className="fw-bold">Modern Villa-Ready Plot - 200 Sq. Yards</h4>
                                    <p className="mb-0 text-muted">
                                        <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                                        Beside Tv9 Colony, Kadambari Road, Kurnool
                                    </p>
                                </div>
                                <h5 className="text-success fw-bold mt-3 mt-lg-0">₹18,00,000</h5>
                            </div>

                            <ImageGallery
                                items={images}
                                showNav={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                            />
                        </div>

                        <div className="bg-white border p-4 shadow-sm rounded mb-4">
                            <h5 className="fw-bold mb-3">Description</h5>
                            <p>
                                This spacious 3BHK villa plot is part of the prestigious YMR 5V Township. Designed with modern living in mind, it provides top-class infrastructure, clear titles, and spot registration. It's ideal for families looking for comfort, convenience, and community.
                            </p>
                        </div>

                        <div className="bg-white border p-4 shadow-sm rounded mb-4">
                            <h5 className="fw-bold mb-3">Property Details</h5>
                            <div className="row g-3">
                                <div className="col-6 col-md-4">Bedrooms: <strong>3</strong></div>
                                <div className="col-6 col-md-4">Bathrooms: <strong>2</strong></div>
                                <div className="col-6 col-md-4">Plot Size: <strong>200 Sq. Yards</strong></div>
                                <div className="col-6 col-md-4">Facing: <strong>East</strong></div>
                                <div className="col-6 col-md-4">Vastu: <strong>100% Compliant</strong></div>
                                <div className="col-6 col-md-4">Road Width: <strong>40 ft</strong></div>
                            </div>
                        </div>

                        <div className="bg-white border p-4 shadow-sm rounded mb-4">
                            <h5 className="fw-bold mb-3">Features</h5>
                            <div className="row g-2">
                                {[
                                    "24/7 Security",
                                    "Underground Drainage",
                                    "Avenue Plantation",
                                    "Street Lighting",
                                    "Gated Entrance",
                                    "Nearby Schools & Markets",
                                ].map((feature, idx) => (
                                    <div className="col-6 col-md-4" key={idx}>
                                        <i className="fa fa-check text-success me-2"></i>{feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border p-4 shadow-sm rounded">
                            <h5 className="fw-bold mb-3">Location Map</h5>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3839.01777598934!2d78.08440507513026!3d15.803016684838546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ4JzEwLjkiTiA3OMKwMDUnMTMuMSJF!5e0!3m2!1sen!2sin!4v1749109600277!5m2!1sen!2sin"
                                    title="Location"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="bg-white border p-4 shadow-sm rounded mb-4">
                            <h5 className="fw-bold mb-3">Recently Added</h5>
                            {[
                                { img: "/img/product1.jpeg", title: "Luxury Villa - YMR 5" },
                                { img: "/img/product1.jpeg", title: "2BHK Ready Plot" },
                                { img: "/img/banner.jpg", title: "Budget Plot 120 Sq. Yards" },
                            ].map((item, idx) => (
                                <div className="d-flex align-items-center mb-2" key={idx}>
                                    <img src={item.img} alt="recent" width="50" className="me-3 rounded" />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border p-4 shadow-sm rounded">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-group list-group-flush">
                                {[
                                    "2BHK Plots",
                                    "3BHK Duplex",
                                    "Villa Ready Plots",
                                    "Premium Ventures",
                                    "Commercial Spaces",
                                ].map((cat, idx) => (
                                    <li className="list-group-item px-0" key={idx}>{cat}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatDetail;
