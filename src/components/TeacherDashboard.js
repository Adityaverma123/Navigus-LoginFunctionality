import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseTeacher from "../firebaseTeacher";
import "./TeacherDashboard.css";
const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
  const history = useHistory();
  useEffect(() => {
    firebaseTeacher.auth().onAuthStateChanged((user) => {
      if (user) {
        setTeacher(user);
      } else {
        setTeacher(null);
      }
    });
  }, []);
  const logout = () => {
    firebaseTeacher
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((exception) => {
        alert(exception);
      });
  };
  if (teacher) {
    return (
      <div className="teacherDashboard">
        <nav className="navbar">
          <h1 className="logo">Navigus</h1>
          <button className="logout" onClick={logout}>
            logout
          </button>
        </nav>
        <div className="dashboard">
          <button className="addCourseBtn">Add Course</button>
          <div className="courses">
            
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Not logged in{" "}
        <button
          on
          onClick={() => {
            history.push("/");
          }}
        >
          Login first
        </button>
      </div>
    );
  }
};

export default TeacherDashboard;
