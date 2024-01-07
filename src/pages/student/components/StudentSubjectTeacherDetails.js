import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Label } from "reactstrap";
import CustomTable from "../../../components/common/CustomTable";
import StudentApi from "../../../api/StudentApi";

function StudentSubjectTeacherDetails() {
  const formData = useSelector((state) => state.form.studentReportForm);

  const studentApi = new StudentApi();

  const [studentReportData, setStudentReportData] = useState([]);

  useEffect(() => {
    async function fetchStudnetReportData() {
      try {
        const data = await studentApi.getStudentReportDataByClassRoomId(
          formData.classRoomId
        );

        data.forEach((record) => {
          record.teacherName =
            record.teacherFirstName + " " + record.teacherLastName;
        });

        setStudentReportData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (formData.classRoomId !== "") {
      fetchStudnetReportData();
    }
  }, [formData.classRoomId]);

  const columnsToDisplay = [
    { key: "subjectName", header: "Subject" },
    { key: "teacherName", header: "Teacher" },
  ];
  return (
    <div>
      {formData.classRoomId ? (
        <CustomTable
          data={studentReportData}
          columnsToShow={columnsToDisplay}
        />
      ) : (
        <Label>
          There is no data available to display! Please select a student.
        </Label>
      )}
    </div>
  );
}

export default StudentSubjectTeacherDetails;
