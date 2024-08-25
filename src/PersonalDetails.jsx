import React from 'react';

function PersonalDetails({ personalDetails, setPersonalDetails }) {

  function handlePersonChange(e) {
    const { name, value } = e.target;
    setPersonalDetails(p => ({ ...p, [name]: value }));
  }

  return (
    <div className='inputs'>
      <h2>Personal details</h2>
      <input
        type="text"
        name="name"
        value={personalDetails.name}
        placeholder="Name"
        onChange={handlePersonChange}
      />
      <input
        type="email"
        name="email"
        value={personalDetails.email}
        placeholder="Email"
        onChange={handlePersonChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        value={personalDetails.phoneNumber}
        placeholder="Phone Number"
        onChange={handlePersonChange}
      />
    </div>
  );
}

export default PersonalDetails;
