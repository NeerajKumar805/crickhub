import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const AllMatches = () => {
  const [allData, setAllData] = useState([]);
  const getAllMatches = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/match/all`);
    if (response.ok) {
      const result = await response.json();
      setAllData(result);
      console.log(allData)
    } else {
      console.log("Error fetching the data: " + response)
    }
  }
  useEffect(
    () => {
      getAllMatches();
    }, []
  )
  return (
    <div className="m-3 d-flex flex-wrap gap-3 justify-content-center">
      {
        allData.map((x, i) => (
          <Card key={i} data={x} />
        ))
      }
    </div>
  )
}

export default AllMatches