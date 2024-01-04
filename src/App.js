import "./App.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Student from "./pages/student/Student";
import ClassRoom from "./pages/classRoom/ClassRoom";
import Teacher from "./pages/teacher/Teacher";
import Subject from "./pages/subject/Subject";
import AllocateSubject from "./pages/subject/AllocateSubject";
import AllocateClassRoom from "./pages/classRoom/AllocateClassRoom";
import StudentReport from "./pages/student/StudentReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<Student />} />
          <Route path="class-rooms" element={<ClassRoom />} />
          <Route path="teachers" element={<Teacher />} />
          <Route path="subjects" element={<Subject />} />
          <Route path="allocate-subjects" element={<AllocateSubject />} />
          <Route path="allocate-class-rooms" element={<AllocateClassRoom />} />
          <Route path="student-reports" element={<StudentReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
