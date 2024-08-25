import { useState } from "react";
import PersonalDetails from './PersonalDetails.jsx';
import PersonalDetailsCV from './PersonalDetailsCV.jsx';
import EducationInfo from './EducationInfo.jsx';
import EducationInfoCV from './EducationInfoCV.jsx';
import ExperienceInfo from './ExperienceInfo.jsx'
import ExperienceInfoCV from './ExperienceInfoCV.jsx'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      schoolName: "",
      degree: "",
      startDate: "",
      finishDate: ""
    }
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      startDate: "",
      endDate: ""
    }
  ]);



  return (
    <div className="cv-builder">
      <div className="form">
        <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
        <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        <ExperienceInfo experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
      </div>
      <div className="CV">
        <PersonalDetailsCV personalDetails={personalDetails} />
        <EducationInfoCV educationInfo={educationInfo}/>
        <ExperienceInfoCV experienceInfo={experienceInfo}/>
      </div>
    </div>
  );
}

export default App;
