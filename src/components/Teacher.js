import "./Teacher.css";
import LoginForm from "./LoginForm";
import TeacherLogin from "./TeacherLogin";
const Teacher = () => {
  return (
    <div className="teacher">
      <img
       className="teacher_png"
        src={require("../images/teacher.png").default}
        alt="teacher png"
        height="95x"
        width="95px"
      />
      <TeacherLogin type="teacher" />
      <div className="blank"></div>
    </div>
  );
};

export default Teacher;
