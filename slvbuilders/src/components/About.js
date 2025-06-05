const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About</h1>
                            <h2 className="page-description">SLV Builders & Developers</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="SLV Builders Office" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Your Trusted Real Estate Partner in Kurnool
                                </div>
                                <div className="about-text">
                                    SLV Builders & Developers is a leading real estate company based in Kurnool, A.P., dedicated to delivering quality homes and commercial spaces. We pride ourselves on our commitment to trust, transparency, and timely project delivery.
                                </div>
                                <div className="about-features">
                                    <p className="about-feature">
                                        <i className="fas fa-long-arrow-alt-right"></i> Located at Plot No.33, Shirdi Sai Nagar, Joharapuram Road
                                    </p>
                                    <p className="about-feature">
                                        <i className="fas fa-long-arrow-alt-right"></i> Near Nandyala Check Post, Kurnool, A.P.
                                    </p>
                                    <p className="about-feature">
                                        <i className="fas fa-long-arrow-alt-right"></i> Builders & Developers with a strong reputation for quality and reliability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
