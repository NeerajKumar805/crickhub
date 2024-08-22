import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function LiveMatches() {
    const [data, setData] = useState([]); // Initialize data as an empty array

    const getMatches = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/match/live`);
            if (response.ok) {
                const result = await response.json();
                setData(result); // Assuming the result is an array of match data
            } else {
                console.error('Error fetching matches:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getMatches();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="m-3 d-flex flex-wrap gap-3 justify-content-center">
            {
                data.map((match, index) => (
                    <Card key={index} data={match} />
                ))
            }
        </div>
    );
}

export default LiveMatches;
