import React from 'react';

function EducationInfo({ educationInfo, setEducationInfo }) {

  function handleEducationChange(index, event) {
    const { name, value } = event.target;
    const updatedEducation = [...educationInfo];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setEducationInfo(updatedEducation);
  }

  function addEducation() {
    setEducationInfo([
      ...educationInfo,
      {
        schoolName: "",
        degree: "",
        startDate: "",
        finishDate: ""
      }
    ]);
  }
  function deleteEducation(index) {
    const updatedEducation = educationInfo.filter((element,i) => i !== index)
    setEducationInfo(updatedEducation)
  }

  return (
    <div className='education-info'>
      <h2>Education Details</h2>
      {educationInfo.map((education, index) => (
        <div key={index} className='inputs'>
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            placeholder="Enter School Name"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="text"
            name="degree"
            value={education.degree}
            placeholder="Degree Name"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="date"
            name="startDate"
            value={education.startDate}
            placeholder="Start Date"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="date"
            name="finishDate"
            value={education.finishDate}
            placeholder="Finish Date"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <button onClick={() => deleteEducation(index)} className='delete-btn'>Delete</button>
        </div>
      ))}
      <button onClick={() => addEducation()} className='add-btn'>Add Another Education</button>
    </div>
  );
}

export default EducationInfo;
