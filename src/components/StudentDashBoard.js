import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseApp from "../firebase";

const StudentDashboard = () => {
  const [currStudent, setStudent] = useState(null);
  const history = useHistory();
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setStudent(user);
      } else {
        setStudent(null);
      }
    });
  }, []);
  const logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((exception) => {
        alert(exception);
      });
  };
  if (currStudent) {
    return (
      <div className="studentDashboard">
        <button onClick={logout}>logout</button>
      </div>
    );
  }
  return <div>Not Logged in</div>;
};

export default StudentDashboard;
