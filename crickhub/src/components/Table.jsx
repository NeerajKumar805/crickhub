import React from 'react';

const Table = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }

    const header = Array.isArray(data[0]) ? data[0] : [];
    const rows = data.slice(1);

    return (
        <div className="container table-responsive shadow-sm rounded w-100 mt-5">
            <table className="table table-hover table-bordered table-striped align-middle text-center">
                <thead className="table-primary">
                    <tr>
                        {header.map((item, index) => (
                            <th key={index} className="fw-bold">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="align-middle">
                            {row.map((item, colIndex) => (
                                <td key={colIndex}>{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
