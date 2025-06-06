import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import BestFlatItem from "./BestFlatItem";

export default class BestFlatList extends Component {
    handleShowSection = (section) => {
        // handle the section switching logic if needed
        console.log("Switch to section:", section);
    };

    render() {
        const title = {
            text: "SLV Builders & Developers – YMR 5▼ Township",
            description: "New Venture in YMR 5 Township, Kurnool",
        };

        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 1, // FULL WIDTH
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <section className="section-best-estate">
                <div className="container-fluid px-0"> {/* full width container */}
                    <div className="row">
                        <div className="col-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <BestFlatItem showSection={this.handleShowSection} />
                                {/* You can add more <BestFlatItem /> here if needed */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
