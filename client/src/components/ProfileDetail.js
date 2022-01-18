import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';

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
    isOver21: profileDetails.isOver21
  });

  const displayUser = async () => {
    const response = await axios.get(`http://localhost:3001/api/users/${_id}`);
    setProfileDetails(response.data.userProfile);
  };

  const deleteProfile = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/users/${_id}`
    );
    props.history.push('/');
    window.location.reload();
    //getAllUsers...
  };

  const handleChange = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };

  const handleBooleans = (e) => {
    let bool_value = e.target.value === 'true' ? true : false;
    setUpdateProfile({ ...updateProfile, [e.target.name]: bool_value });
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:3001/api/users/${_id}`,
      updateProfile
    );
    window.location.reload();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile();
    props.history.push(`/profiledetail/${_id}`);
  };

  useEffect(() => {
    displayUser();
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
            <h2>Backcountry: YES OR NO HERE</h2>
            <h2>Personal Story: </h2>
            <p> {profileDetails.personalStory}</p>
            <h3>Contact: {profileDetails.personalStory}</h3>
            <h3>Instructor: YES OR NO HERE</h3>
            <h3>Over 21: YES OR NO HERE</h3>
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
              displayUser={displayUser}
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
