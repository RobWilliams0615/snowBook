import React, { useState, useEffect } from "react";
import axios from "axios";

const Mountain = (props) => {
  const [cityDetails, setCityDetails] = useState([]);
  const [resorts, setResorts] = useState([]);

  const displayMountain = async () => {
    const response = await axios.get(`/api/cities/${props.match.params.id}`);
    setCityDetails(response.data.city);
    setResorts(response.data.city.resorts);
  };

  useEffect(() => {
    displayMountain();
  }, []);

  return (
    <div>
      <div className="mountain-cards">
        <h1>{cityDetails.name}</h1>
        <h2>Resorts</h2>
        {resorts.map((rest, idx) => (
          <h3 key={idx}>{rest}</h3>
        ))}
      </div>
    </div>
  );
};

export default Mountain;
