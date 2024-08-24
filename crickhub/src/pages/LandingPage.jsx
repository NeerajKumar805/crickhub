import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div
            className="landing-section text-center position-relative d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: 'url("../../public/img/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '91.4vh',
            }}
        >
            {/* Dark Overlay */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Slightly darker overlay for better text contrast
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            ></div>

            {/* Content */}
            <div className="container position-relative text-white" style={{ zIndex: 2 }}>
                <h1 className="display-3 fw-bold mb-4" style={{ letterSpacing: '2px' }}>
                    Welcome to <span style={{ color: '#FFD700' }}>CRICKHUB</span>
                </h1>
                <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Your go-to platform for live cricket scores, points tables, and more.
                    Stay updated with the latest matches and cricket action!
                </p>
                <button
                    className="btn btn-outline-light btn-lg px-5"
                    onClick={() => navigate('/live')}
                    style={{ borderRadius: '50px' }}  // Rounded button for a modern look
                >
                    View Live Matches
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
