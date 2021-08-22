import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseApp from "../firebase";
import firebaseTeacher from "../firebaseTeacher";
import "./Login.css";
import Student from "./Student";
import Teacher from "./Teacher";
const Login = () => {
  const [student, setStudent] = useState();
  const [teacher, setTeacher] = useState();
  const history = useHistory();
  useEffect(() => {
    authStudentListener();
    authTeacherListener();
  }, []);
  const authStudentListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setStudent(user);
      } else {
        setTeacher(null);
      }
    });
  };
  const authTeacherListener = () => {
    firebaseTeacher.auth().onAuthStateChanged((teacher) => {
      if (teacher) {
        setTeacher(teacher);
      } else {
        setTeacher(null);
      }
    });
  };
  return (
    <>
      {student ? (
        history.push("/studentDashboard")
      ) : teacher ? (
        history.push("/teacherDashboard")
      ) : (
        <div className="login">
          <Student />
          <Teacher />
        </div>
      )}
    </>
  );
};

export default Login;
