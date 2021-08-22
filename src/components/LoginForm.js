import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseStudent from "../firebase";
import "./LoginForm.css";

const LoginForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();

    firebaseStudent
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        history.push("/studentDashboard");
      })
      .catch((exception) => {
        alert(exception);
      });
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

export default LoginForm;
