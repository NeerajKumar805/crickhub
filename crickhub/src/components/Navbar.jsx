import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top shadow">
            <div className="container">
                <Link className="navbar-brand fw-bold text-uppercase" to="/home">
                    Crickhub
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/live" className="nav-link">
                                Live Match
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/all" className="nav-link">
                                All Matches
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/points-table" className="nav-link">
                                Points Table
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
