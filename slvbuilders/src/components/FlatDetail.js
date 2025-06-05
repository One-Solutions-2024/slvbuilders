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
        <div className="flat-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Premium 3BHK Villa Plot</h1>
                            <h2 className="page-description">Located in YMR 5 Township, Kurnool</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top flat-detail-content">
                            <div>
                                <h3 className="flat-detail-title">Modern Villa-Ready Plot - 200 Sq. Yards</h3>
                                <p className="fd-address"><i className="fas fa-map-marker-alt"></i> Beside Tv9 Colony, Kadambari Road, Kurnool</p>
                            </div>
                            <div>
                                <span className="fd-price">₹18,00,000</span>
                            </div>
                        </div>

                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p>This spacious 3BHK villa plot is part of the prestigious YMR 5V Township. Designed with modern living in mind, it provides top-class infrastructure, clear titles, and spot registration. It's ideal for families looking for comfort, convenience, and community.</p>
                                </div>

                                <div className="fd-item fd-property-detail">
                                    <h4>Property Details</h4>
                                    <div className="row">
                                        <div className="col-lg-4"><span>Bedrooms:</span> <span>3</span></div>
                                        <div className="col-lg-4"><span>Bathrooms:</span> <span>2</span></div>
                                        <div className="col-lg-4"><span>Plot Size:</span> <span>200 Sq. Yards</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4"><span>Facing:</span> <span>East</span></div>
                                        <div className="col-lg-4"><span>Vastu:</span> <span>100% Compliant</span></div>
                                        <div className="col-lg-4"><span>Road Width:</span> <span>40 ft</span></div>
                                    </div>
                                </div>

                                <div className="fd-item fd-features">
                                    <h4>Features</h4>
                                    <div className="row">
                                        <div className="col-lg-4"><i className="fa fa-check"></i> 24/7 Security</div>
                                        <div className="col-lg-4"><i className="fa fa-check"></i> Underground Drainage</div>
                                        <div className="col-lg-4"><i className="fa fa-check"></i> Avenue Plantation</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4"><i className="fa fa-check"></i> Street Lighting</div>
                                        <div className="col-lg-4"><i className="fa fa-check"></i> Gated Entrance</div>
                                        <div className="col-lg-4"><i className="fa fa-check"></i> Nearby Schools & Markets</div>
                                    </div>
                                </div>

                                <div className="fd-item">
                                    <h4>Location Map</h4>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3839.01777598934!2d78.08440507513026!3d15.803016684838546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ4JzEwLjkiTiA3OMKwMDUnMTMuMSJF!5e0!3m2!1sen!2sin!4v1749109600277!5m2!1sen!2sin" width="100%"
                                        height="450"
                                        loading="lazy"
                                        allowFullScreen
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item"><img src="/img/product1.jpeg" alt="recent" width="50px" /> <span>Luxury Villa - YMR 5</span></div>
                                    <div className="recently-item"><img src="/img/product1.jpeg" alt="recent" width="50px" /> <span>2BHK Ready Plot</span></div>
                                    <div className="recently-item"><img src="/img/banner.jpg" alt="recent" width="50px" /> <span>Budget Plot 120 Sq. Yards</span></div>
                                </div>

                                <div className="fd-sidebar-item">
                                    <h4>Categories</h4>
                                    <ul className="category-ul">
                                        <li>2BHK Plots</li>
                                        <li>3BHK Duplex</li>
                                        <li>Villa Ready Plots</li>
                                        <li>Premium Ventures</li>
                                        <li>Commercial Spaces</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatDetail;
