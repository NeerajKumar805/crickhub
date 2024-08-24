import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

const PointsTable = () => {
  const [allData, setAllData] = useState([]);

  const getAllMatches = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/match/points-table`);
      if (response.ok) {
        const result = await response.json();
        const structuredData = restructureData(result);
        setAllData([structuredData]);
      } else {
        console.log("Error fetching the data: " + response.statusText);
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  const restructureData = (flatArray) => {
    const headers = flatArray.slice(0, 8); // First 8 items are headers
    const rows = [];

    for (let i = 8; i < flatArray.length; i += 9) {
      rows.push(flatArray.slice(i + 1, i + 9));
    }

    return [headers, ...rows];
  };

  useEffect(() => {
    getAllMatches();
  }, []);

  return (
    <div className="m-3 d-flex flex-wrap gap-3 justify-content-center">
      {allData.map((x, i) => (
        <Table key={i} data={x} />
      ))}
    </div>
  );
};

export default PointsTable;
