import { useEffect, useState } from "react";
import StudentDashboard from "./components/StudentDashBoard";
import TeacherDashboard from "./components/TeacherDashboard";
import Teacher from "./components/Teacher";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const checkStudent = () => {
    return true;
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/studentDashboard">
            <StudentDashboard />
          </Route>

          <Route exact path="/teacherDashboard">
            <TeacherDashboard />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
