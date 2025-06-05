const Contact = () => {
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Contact</h1>
                            <h2 className="page-description">Get in Touch with SLV Builders</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>Email</h5>
                                        <h6>slvbuilderskurnool@gmail.com</h6> {/* Replace if you have the actual email */}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Address</h5>
                                        <h6>
                                            Plot No.33, Shirdi Sai Nagar,<br />
                                            Joharapuram Road, Near Nandyala Check Post,<br />
                                            Kurnool, A.P.
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Phone</h5>
                                        <h6>+91 98765 43210</h6> {/* Replace with actual phone if known */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>Full Name</label>
                                    <input type="text" className="inp-contact" placeholder="Enter your name" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Phone</label>
                                    <input type="text" className="inp-contact" placeholder="Enter your phone number" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Subject</label>
                                    <input type="text" className="inp-contact" placeholder="Enter subject" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Message</label>
                                    <textarea className="ta-contact" rows="4" placeholder="Write your message here..."></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact">Send Message</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
