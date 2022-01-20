import React, { useState } from "react";
import axios from "axios";

const Profile = (props) => {
  const [newProfile, setNewProfile] = useState({
    typeOfRide: "",
    firstName: "",
    lastName: "",
    image: "",
    gender: "",
    zipCode: "",
    interest: "",
    level: "",
    isBackcountry: false,
    personalStory: "",
    contactInfo: "",
    isInstructor: false,
    isOver21: false,
  });

  const addProfile = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/users/createprofile", newProfile);

    const resp = await axios.get(`/api/users`);

    let lastEle = resp.data.users.slice(-1)[0].id;
    props.history.push(`/profiledetail/${lastEle}`);
    window.location.reload();
  };
  //to get values from fields
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // to change to boolean
  const handleBooleans = (e) => {
    let bool_value = e.target.value === "true" ? true : false;
    setNewProfile({ ...newProfile, [e.target.name]: bool_value });
  };

  return (
    <div>
      <form onSubmit={addProfile}>
        <h3>Create your profile</h3>
        <img
          className="blank-image"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OKJB0ZYbFTUVCdfsZHvpEwHaHa%26pid%3DApi&f=1"
        />
        <input
          className="test"
          id="first-name"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={newProfile.firstName}
          placeholder={"Enter first name:"}
        ></input>
        <input
          id="last-name"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={newProfile.lastName}
          placeholder={"Enter last name:"}
        ></input>
        <input
          id="image"
          type="text"
          name="image"
          onChange={handleChange}
          value={newProfile.image}
          placeholder={"Enter image URL:"}
        ></input>
        <input
          id="gender"
          type="text"
          name="gender"
          onChange={handleChange}
          value={newProfile.gender}
          placeholder={"Enter gender:"}
        ></input>
        <input
          id="zip"
          type="text"
          name="zipCode"
          onChange={handleChange}
          value={newProfile.zipCode}
          placeholder={"Enter zip code:"}
        ></input>
        <input
          id="interest"
          type="text"
          name="interest"
          onChange={handleChange}
          value={newProfile.interest}
          placeholder={"Enter interest:"}
        ></input>
        <input
          id="level"
          type="text"
          name="level"
          onChange={handleChange}
          value={newProfile.level}
          placeholder={"Enter level:"}
        ></input>

        <input
          id="ride"
          type="text"
          name="typeOfRide"
          onChange={handleChange}
          value={newProfile.typeOfRide}
          placeholder={"Enter ride:"}
        ></input>
        <label htmlFor="isBackcountry">Backcountry?</label>
        <select
          id="country"
          onChange={handleBooleans}
          name="isBackcountry"
          id="isBackcountry"
          value={newProfile.isBackcountry}
          placeholder={"Backountry?:"}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <input
          id="story"
          type="text"
          name="personalStory"
          onChange={handleChange}
          value={newProfile.personalStory}
          placeholder={"Have a personal story to tell?:"}
        ></input>
        <input
          id="contact"
          type="text"
          name="contactInfo"
          onChange={handleChange}
          value={newProfile.contactInfo}
          placeholder={"Contact Info:"}
        ></input>
        <label htmlFor="isInstructor">Instructor?</label>

        <select
          id="instructor"
          name="isInstructor"
          id="isInstructor"
          onChange={handleBooleans}
          value={newProfile.isInstructor}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <label htmlFor="isOver21">Over 21?</label>

        <select
          id="over"
          name="isOver21"
          id="isOver21"
          onChange={handleBooleans}
          value={newProfile.isOver21}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <input
          type="submit"
          className="create-profile-btn"
          value="Create Profile"
        ></input>
      </form>
    </div>
  );
};

export default Profile;
