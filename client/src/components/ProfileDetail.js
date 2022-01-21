import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const ProfileDetail = (props) => {
  const [update, setUpdate] = useState(false);
  const toggleUpdate = () => {
    setUpdate(!update);
  };

  let _id = props.match.params.id;
  const [profileDetails, setProfileDetails] = useState([]);
  const [updateProfile, setUpdateProfile] = useState({
    typeOfRide: profileDetails.typeOfRide,
    firstName: profileDetails.firstName,
    image: profileDetails.image,
    lastName: profileDetails.lastName,
    gender: profileDetails.gender,
    zipCode: profileDetails.zipCode,
    interest: profileDetails.interest,
    level: profileDetails.level,
    isBackcountry: profileDetails.isBackcountry,
    personalStory: profileDetails.personalStory,
    contactInfo: profileDetails.contactInfo,
    isInstructor: profileDetails.isInstructor,
    isOver21: profileDetails.isOver21,
  });

  const deleteProfile = async () => {
    const response = await axios.delete(`/api/users/${_id}`);

    props.history.push("/home");
    window.location.reload();
  };

  const handleChange = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };

  const handleBooleans = (e) => {
    let bool_value = e.target.value === "true" ? true : false;
    setUpdateProfile({ ...updateProfile, [e.target.name]: bool_value });
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/users/${_id}`, updateProfile);
    window.location.reload();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile();
    props.history.push(`/profiledetail/${_id}`);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const displayUser = async () => {
      try {
        const response = await axios.get(`/api/users/${_id}`, {
          cancelToken: source.token,
        });
        setProfileDetails(response.data.userProfile);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };
    displayUser();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div>
      <div className="user-profiles">
        <img src={profileDetails.image}></img>
        {update === false ? (
          <div className="user-info">
            <h1>
              {profileDetails.firstName} {profileDetails.lastName}
            </h1>
            <h2>Gender: {profileDetails.gender}</h2>
            <h2>Zip code: {profileDetails.zipCode}</h2>
            <h2>Interest: {profileDetails.interest}</h2>
            <h2>Level: {profileDetails.level}</h2>
            <h2>Type of ride: {profileDetails.typeOfRide}</h2>
            <h2>
              Backcountry:
              {profileDetails.isBackcountry ? " Yes" : " No"}
            </h2>
            <h2>Personal Story: </h2>
            <p> {profileDetails.personalStory}</p>
            <h3>Contact: {profileDetails.contactInfo}</h3>
            <h3>Instructor: {profileDetails.isInstructor ? " Yes" : " No"}</h3>
            <h3>Over 21: {profileDetails.isOver21 ? " Yes" : " No"}</h3>
          </div>
        ) : (
          <div className="user-info">
            <Form
              {...props}
              handleChange={handleChange}
              handleBooleans={handleBooleans}
              updateProfile={updateProfile}
              updateUserProfile={updateUserProfile}
              handleUpdate={handleUpdate}
              profileDetails={profileDetails}
            />
          </div>
        )}
        <button className="profile-btn" onClick={toggleUpdate}>
          Update Profile
        </button>
        <button className="profile-btn" onClick={deleteProfile}>
          Delete profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
