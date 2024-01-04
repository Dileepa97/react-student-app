import "./App.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Student from "./pages/student/Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
