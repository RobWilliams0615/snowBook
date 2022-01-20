import React, { useState, useEffect } from "react";
import axios from "axios";

const StoreDetail = (props) => {
  const [skiStoreDetails, setSkiStoreDetail] = useState([]);

  const displaySkiStore = async () => {
    const response = await axios.get(`/api/skistores/${props.match.params.id}`);
    setSkiStoreDetail(response.data.skistore);
  };

  useEffect(() => {
    displaySkiStore();
  }, []);

  return (
    <div>
      <div className="store-cards">
        <h1>{skiStoreDetails.name}</h1>
        <h2>{skiStoreDetails.address}</h2>
        <h3>
          Rentals offered:
          {skiStoreDetails.rentalsOffered ? " Yes" : " No"}
        </h3>

        <h3>
          Guides offered:
          {skiStoreDetails.guidesOffered ? " Yes" : " No"}
        </h3>
      </div>
    </div>
  );
};

export default StoreDetail;
