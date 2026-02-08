import "./Profile.css";
 import photo from "../assets/photo.png";

 export default function profile(){
    return (
        <header className="profile">
            <img src={photo} alt="profile" className="profile-img" />
            <h1>Student tracker</h1>
        </header>
    )
 }