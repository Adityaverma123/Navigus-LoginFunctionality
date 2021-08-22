import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseTeacher from "../firebaseTeacher";
import "./Login.css";
const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      firebaseTeacher
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          history.push("/teacherDashboard");
        })
        .catch((exception) => {
          alert(exception);
        });
    }
  };

  return (
    <form className="form" onSubmit={login}>
      <h3>Login</h3>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default TeacherLogin;
