import { Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import EditStudentPage from "./pages/EditStudentPage";
import "./App.css";
import "./index.css";
import Profile from "./Component/profile";

function App() {
  return (
    <div className="container">
      <Profile/>
      <Routes>
        <Route index element={<StudentListPage />} />
        <Route path="/list" element={<StudentListPage />} />
        <Route path="/add" element={<AddStudentPage />} />
        <Route path="/detail/:id" element={<StudentDetailPage />} />
        <Route path="/edit/:id" element={<EditStudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
