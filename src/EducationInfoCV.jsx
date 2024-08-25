
function EducationInfoCV({ educationInfo }) {
  return (
    <div className="CV">
      <h2>Education Info</h2>
      {educationInfo.map((education, index) => (
        <div key={index}>
          <h3>Education #{index + 1}</h3>
          <p>School Name: {education.schoolName}</p>
          <p>Degree: {education.degree}</p>
          <p>Start Date: {education.startDate}</p>
          <p>Finish Date: {education.finishDate}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationInfoCV;
