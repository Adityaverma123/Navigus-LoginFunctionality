import "./Student.css";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
const Student = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="student">
      <img
        src={require("../images/student-male.png").default}
        alt="student png"
        height="110px"
        width="110px"
        className="student_png"
      />
      {register ? (
        <>
          <RegisterForm />
          <div className="login_container">
            Already Registered?
            <span className="login_span" onClick={() => setRegister(false)}>
              Login Now!
            </span>
          </div>
        </>
      ) : (
        <>
          <LoginForm type="student" />
          <div className="login_container">
            New Student?
            <span className="login_span" onClick={() => setRegister(true)}>
              Register Now!
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Student;
