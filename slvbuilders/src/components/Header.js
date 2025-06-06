import React, { useState, useEffect } from "react";
import slv_logo from "../slv_logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Custom styles
  const headerStyles = {
    transition: "all 0.3s ease-in-out",
    boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "0 2px 6px rgba(0, 0, 0, 0.05)",
    backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 1)",
  };

  const navLinkStyles = {
    position: "relative",
    padding: "0.5rem 1rem",
    transition: "all 0.2s ease",
    color: "#333",
  };

  const activeNavLinkStyles = {
    color: "#0d6efd",
    fontWeight: "600",
  };

  const hoverEffect = {
    ":hover": {
      color: "#0d6efd",
      transform: "translateY(-1px)",
    },
    "::before": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#0d6efd",
      transition: "width 0.3s ease",
    },
    ":hover::before": {
      width: "70%",
    },
  };

  const combinedNavLinkStyles = (path) => ({
    ...navLinkStyles,
    ...(location.pathname === path ? activeNavLinkStyles : {}),
    ...hoverEffect,
  });

  return (
    <header 
      className="sticky-top" 
      style={headerStyles}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-3">
          <div className="container-fluid">
            {/* Logo */}
            <Link 
              className="navbar-brand d-flex align-items-center" 
              to="/"
              style={{
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "scale(1.02)",
                }
              }}
            >
              <img
                src={slv_logo}
                alt="SLV Builders Logo"
                width="90"
                className="me-2 rounded-circle shadow-sm"
                style={{
                  border: "2px solid rgba(13, 110, 253, 0.2)",
                  transition: "all 0.3s ease",
                }}
              />
              <span 
                className="fw-bold text-primary fs-5"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                SLV Builders
              </span>
            </Link>

            {/* Toggler for mobile */}
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                fontSize: "1.25rem",
                padding: "0.5rem",
                transition: "all 0.3s ease",
                ":hover": {
                  color: "#0d6efd",
                  transform: "rotate(90deg)",
                },
                ":focus": {
                  boxShadow: "none",
                }
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div 
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto text-center">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/properties", label: "Properties" },
                  { path: "/contact", label: "Contact" },
                ].map((item) => (
                  <li 
                    key={item.path} 
                    className="nav-item mx-1 mx-lg-2 my-1 my-lg-0"
                  >
                    <Link
                      className="nav-link position-relative"
                      to={item.path}
                      style={combinedNavLinkStyles(item.path)}
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <span 
                          className="position-absolute bottom-0 start-50 translate-middle-x bg-primary"
                          style={{
                            height: "2px",
                            width: "70%",
                            borderRadius: "2px",
                          }}
                        ></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;