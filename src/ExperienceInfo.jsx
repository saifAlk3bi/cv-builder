import React from 'react';

function ExperienceInfo({ experienceInfo, setExperienceInfo }) {
  function handleExperienceChange(index, event) {
    const { name, value } = event.target; 
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo[index] = { ...updatedExperienceInfo[index], [name]: value };
    setExperienceInfo(updatedExperienceInfo);
  }

  function addExperience() {
    setExperienceInfo([
      ...experienceInfo,
      {
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
      }
    ]);
  }

  return (
    <div>
      <h2>Experience Info</h2>
      {experienceInfo.map((experience, index) => (
        <div key={index}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={experience.companyName}
            onChange={(e) => handleExperienceChange(index, e)} // Pass index and event
          />

          <input
            type="text"
            name="positionTitle"
            placeholder="Position Title"
            value={experience.positionTitle}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <input
            type="text"
            name="responsibilities"
            placeholder="Responsibilities"
            value={experience.responsibilities}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={experience.endDate}
            onChange={(e) => handleExperienceChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addExperience}>Add Another Experience</button>
    </div>
  );
}

export default ExperienceInfo;
