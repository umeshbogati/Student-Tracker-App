import { Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import AddStudentPage from "./pages/AddStudentPage";
import "./App.css";
import Profile from "./Component/profile";

function App() {
  return (
    <div className="container">
      <Profile/>
      <Routes>
        <Route index element={<StudentListPage />} />
        <Route path="/list" element={<StudentListPage />} />
        <Route path="/add" element={<AddStudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
