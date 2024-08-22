import React from 'react';

function Card({ data }) {
    return (
        <div className="col-lg-3 col-md-4 mb-4 d-flex">
            <div className="card shadow-sm border border-bottom-3 w-100">
                <div className="card-header bg-secondary text-white text-center">
                    <h6 className="card-title mb-0">{data.teamHeading}</h6>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{data.matchNumberVenue}</h6>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">
                            <strong>{data.battingTeam}</strong>
                        </p>
                        <p className="card-text">
                            {data.battingTeamScore}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">
                            <strong>{data.bowlTeam}</strong>
                        </p>
                        <p className="card-text">
                            {data.bowlTeamScore}
                        </p>
                    </div>
                    <p className="card-text text-danger">{data.liveText}</p>
                    <a
                        href={'https://www.cricbuzz.com' + data.matchLink}
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Match Details
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
