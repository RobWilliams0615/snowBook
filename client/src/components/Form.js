import React from "react";

const Form = ({
  updateUserProfile,
  handleChange,
  handleBooleans,
  updateProfile,
}) => {
  return (
    <div>
      <div className="grid-container-profile">
        <form className="form" onSubmit={updateUserProfile}>
          <div>
            <label htmlFor="firstName">Enter first name: </label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={updateProfile.firstName}
            ></input>

            <label htmlFor="lastName">Enter last name: </label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={updateProfile.lastName}
            ></input>

            <label htmlFor="image">Enter image URL</label>
            <input
              id="image"
              type="text"
              name="image"
              onChange={handleChange}
              value={updateProfile.image}
            ></input>

            <label htmlFor="gender">Enter gender: </label>
            <input
              id="gender"
              type="text"
              name="gender"
              onChange={handleChange}
              value={updateProfile.gender}
            ></input>

            <label htmlFor="zipCode">Enter zip code: </label>
            <input
              id="zip"
              type="text"
              name="zipCode"
              onChange={handleChange}
              value={updateProfile.zipCode}
            ></input>

            <label htmlFor="interest">Enter interest: </label>
            <input
              id="interest"
              type="text"
              name="interest"
              onChange={handleChange}
              value={updateProfile.interest}
            ></input>

            <label htmlFor="level">Enter level: </label>
            <input
              id="level"
              type="text"
              name="level"
              onChange={handleChange}
              value={updateProfile.level}
            ></input>

            <label htmlFor="typeOfRide">Enter ride: </label>
            <input
              id="ride"
              type="text"
              name="typeOfRide"
              onChange={handleChange}
              value={updateProfile.typeOfRide}
            ></input>

            <label htmlFor="isBackcountry">Back country? </label>
            <select
              id="country"
              onChange={handleBooleans}
              name="isBackcountry"
              id="isBackcountry"
              value={updateProfile.isBackcountry}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>

            <label htmlFor="personalStory">
              Have a personal story to tell?
            </label>
            <input
              id="story"
              type="text"
              name="personalStory"
              onChange={handleChange}
              value={updateProfile.personalStory}
            ></input>

            <label>Method of contact</label>
            <input
              id="contact"
              type="text"
              name="contactInfo"
              onChange={handleChange}
              value={updateProfile.contactInfo}
            ></input>

            <label htmlFor="isInstructor">Instructor?</label>
            <select
              id="instructor"
              name="isInstructor"
              id="isInstructor"
              onChange={handleBooleans}
              value={updateProfile.isInstructor}
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
              value={updateProfile.isOver21}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <input
              type="submit"
              className="profile-btn"
              value="Update Profile"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
