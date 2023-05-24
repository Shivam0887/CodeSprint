import { Link } from "react-router-dom";
import signupStyles from "./Signup.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = ({ handleChange, handleSubmit, user, err }) => {
  return (
    <div className={signupStyles.form_container}>
      <div className={signupStyles.box}>
        <form
          onSubmit={handleSubmit}
          className={signupStyles.container}
          method="POST"
        >
          <h2 style={{ letterSpacing: "1.5px", marginBottom: "20px" }}>
            Sign Up
          </h2>
          <div className={signupStyles.input_container}>
            <FaUserCircle className={signupStyles.icon} />
            <input
              className={signupStyles.form_input}
              style={{ width: "130px" }}
              type="text"
              name="fname"
              value={user.fname}
              placeholder="First name"
              onChange={handleChange}
            />
            <div
              style={{
                width: "1px",
                height: "20px",
                position: "absolute",
                backgroundColor: "#cdcdcd",
                top: "10px",
                left: "125px",
              }}
            ></div>
            <input
              className={signupStyles.form_input}
              style={{ width: "130px" }}
              type="text"
              name="lname"
              value={user.lname}
              placeholder="Last name"
              onChange={handleChange}
            />
            <i className={signupStyles.bottom_line}></i>
          </div>
          <div className={signupStyles.input_container}>
            <MdEmail className={signupStyles.icon} />
            <input
              className={signupStyles.form_input}
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <i className={signupStyles.bottom_line}></i>
          </div>
          <div className={signupStyles.input_container}>
            <RiLockPasswordFill className={signupStyles.icon} />
            <input
              className={signupStyles.form_input}
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
            <i className={signupStyles.bottom_line}></i>
          </div>
          <div className={signupStyles.input_container}>
            <RiLockPasswordFill className={signupStyles.icon} />
            <input
              className={signupStyles.form_input}
              type="password"
              name="cpassword"
              value={user.cpassword}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <i className={signupStyles.bottom_line}></i>
          </div>

          <button className={signupStyles.signup_btn}>Sign up</button>
          {err && (
            <p
              style={{
                color: err === "Successfully registered" ? "green" : "red",
                marginTop: "10px",
              }}
            >
              {err}
            </p>
          )}

          <div style={{ marginTop: "15px", textIndent: "-10px" }}>
            <span className={signupStyles.already_signup}>
              Already sign up?
            </span>
            <Link to="/sign-in" className={signupStyles.signin_btn}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
