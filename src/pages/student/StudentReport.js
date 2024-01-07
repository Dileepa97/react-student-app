import React from "react";
import ContentBox from "../../components/common/ContentBox";
import ReportStudentDetails from "./components/ReportStudentDetails";
import StudentSubjectTeacherDetails from "./components/StudentSubjectTeacherDetails";

function StudentReport() {
  const StudentDetailsComponent = () => <ReportStudentDetails />;
  const StudentSubjectTeacherDetailsComponent = () => (
    <StudentSubjectTeacherDetails />
  );

  return (
    <div className="container">
      <ContentBox title="Student Details" child={<StudentDetailsComponent />} />

      <ContentBox
        title="Teacher & Subject Details"
        child={<StudentSubjectTeacherDetailsComponent />}
      />
    </div>
  );
}

export default StudentReport;
