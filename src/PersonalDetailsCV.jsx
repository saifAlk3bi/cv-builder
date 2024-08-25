import React from 'react';

function PersonalDetailsCV({ personalDetails }) {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Name: {personalDetails.name}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone number: {personalDetails.phoneNumber}</p>
    </div>
  );
}

export default PersonalDetailsCV;
