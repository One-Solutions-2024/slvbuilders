import React from "react";
import { useHistory } from 'react-router-dom';
import slv_main from "../slv_main.jpg";

const BestFlatItem = ({ showSection }) => {
    const history = useHistory();

    const handleClick = () => {
        showSection?.("detail");
        history.push("/blog-detail"); // Navigates to /blog-detail
    };

    return (
        <div
            className="card w-100 mb-4 px-3 py-3 cursor best-flat-item"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
        >
            <div className="row g-0 align-items-center">
                {/* Left Side: Image */}
                <div className="col-md-5">
                    <img
                        src={slv_main}
                        className="img-fluid rounded-start w-100"
                        alt="SLV Builders"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">
                            🏡 SLV Builders & Developers – YMR 5 Township
                        </h5>
                        <p className="card-text">
                            Welcome to YMR 5▼ Township, a premium residential layout developed by SLV Builders & Developers and approved by KUDA and CREDAI. Strategically located beside TV9 Colony, Kurnool, this township offers thoughtfully planned plots and modern infrastructure for peaceful living.
                        </p>
                        <p className="card-text">
                            🔑 Available Options:<br />
                            🏠 2 BHK Residential Plots<br />
                            🏡 3 BHK Duplex-Ready Plots<br />
                            🏘️ 4 BHK Villa Plots<br />
                            📐 Plot sizes ranging from 120 Sq. Yards to 300+ Sq. Yards
                        </p>
                        <p className="card-text">
                            🌟 Venture Highlights:<br />
                            100% Vastu-compliant layout<br />
                            40’ & 33’ wide blacktop roads<br />
                            Underground drainage system<br />
                            Electricity with street lighting<br />
                            Avenue plantation and landscaping<br />
                            Clear title with spot registration<br />
                            Children's play area & community space<br />
                            24/7 security with gated entrance<br />
                            Easy access to schools, hospitals & markets
                        </p>
                        <p className="card-text">
                            📍 Location Advantage:<br />
                            Beside TV9 Colony, Kadambari Township Road<br />
                            Close to Kurnool city and transport links
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFlatItem;
