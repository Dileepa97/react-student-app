import "./App.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Student from "./pages/student/Student";
import ClassRoom from "./pages/classRoom/ClassRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<Student />} />
          <Route path="class-rooms" element={<ClassRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
