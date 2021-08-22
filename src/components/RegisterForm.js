import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseStudent from "../firebase";
import "./LoginForm";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      firebaseStudent
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          history.push("/studentDashboard");
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  return (
    <form className="form" onSubmit={signIn}>
      <h3>Register</h3>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
