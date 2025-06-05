import { Link } from "react-router-dom";

const FlatItem = ({ slug }) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6">
            <div className="item  p-3">
                <div className="item-image mb-2">
                    <img className="img-fluid rounded" src="/img/product1.jpeg" alt="2 BHK Plot" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title fw-bold text-start">
                            2 BHK Residential Plot – YMR 5 Township
                        </span>
                        <span className="item-price text-success fw-semibold">$12,500</span>
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                        <div>
                            <i className="fas fa-map-marker-alt text-primary me-1"></i>
                            <span>Kadambari Road, Kurnool</span>
                        </div>
                        <div>
                            <i className="fas fa-vector-square text-warning me-1"></i>
                            <span>150 Sq. Yards</span>
                        </div>
                    </div>
                    <div className="text-end mt-3">
                        <Link to={`/flat/${slug}`}>
                            <button className="btn btn-detail btn-sm">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatItem;
