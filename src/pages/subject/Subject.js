import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import ContentBox from "../../components/common/ContentBox";
import SubjectDetails from "./components/SubjectDetails";
import ExistingSubjects from "./components/ExistingSubjects";
import SubjectApi from "../../api/SubjectApi";
import "./Subject.sass";

function Subject() {
  const subjectApi = new SubjectApi();

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const data = await subjectApi.getAllSubjects();
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    }

    fetchSubjects();
  }, []);

  const SubjectDetailsComponent = () => <SubjectDetails />;
  const ExistingSubjectsComponent = () => <ExistingSubjects data={subjects} />;

  return (
    <div className="container">
      <ContentBox title="Subject Details" child={<SubjectDetailsComponent />} />

      <ContentBox
        title="Existing Subjects"
        child={
          subjects.length > 0 ? (
            <ExistingSubjectsComponent />
          ) : (
            <Label>There is no data available to display!</Label>
          )
        }
      />
    </div>
  );
}

export default Subject;
