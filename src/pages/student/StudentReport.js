import React from "react";
import ContentBox from "../../components/common/ContentBox";
import ReportStudentDetails from "./components/ReportStudentDetails";

function StudentReport() {
  const StudentDetailsComponent = () => <ReportStudentDetails />;

  return (
    <div className="container">
      <ContentBox title="Student Details" child={<StudentDetailsComponent />} />

      <ContentBox title="Teacher & Subject Details" child="Message" />
    </div>
  );
}

export default StudentReport;
