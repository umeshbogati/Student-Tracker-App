import "./Profile.css";
import { NavLink } from "react-router-dom";

export default function Profile() {
  return (
    <header className="profile">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzaEPsPUdvX_tev1ZTi8K99o1bv6O4761sPXMSrh8wfTwsOxlloc3EGs&s"
          alt="Student Tracker Logo"
          title="Student Tracker Logo"
        />
        <h1>Student Tracker</h1>
      </div>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/add">Add Student</NavLink>
      </nav>
    </header>
  );
}
