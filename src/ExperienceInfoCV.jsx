function ExperienceInfoCV({ experienceInfo }) {
  return (
    <div className="CV">
      <h2>Experience Info</h2>
      {experienceInfo.map((experience, index) => (
        <div key={index}>
          <h3>Experience #{index + 1}</h3>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceInfoCV;
