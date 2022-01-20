import React from "react";

const Home = (props) => {
  const showProfiles = (id) => {
    props.history.push(`/profiledetail/${id}`);
  };

  return (
    <div>
      <div className="grid-container">
        {props.home.map((ele, idx) => (
          <div
            key={idx}
            className="profile-card"
            onClick={() => showProfiles(ele.id)}
          >
            <div className="profile-names" key={idx}>
              <img src={ele.image} />
              <div>{ele.firstName}</div>
              <div>{ele.lastName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
