import { Link, useNavigate } from "react-router-dom";
import signinStyles from "./Signin.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = ({ handleChange, handleSubmit, user, err }) => {
  const navigate = useNavigate();
  if(err === "login successfully"){
    toast.success(err);
     setTimeout(() =>{
       navigate('/new-blog')
     }, 2000);
  }
  
  return (
    <>
      <ToastContainer/>
      <div className={signinStyles.form_container}>
        <div className={signinStyles.box}>
          <form
            onSubmit={handleSubmit}
            className={signinStyles.container}
            method="POST"
          >
            <h2 style={{ letterSpacing: "1.5px", marginBottom: "20px" }}>
              Sign In
            </h2>
            <div className={signinStyles.input_container}>
              <MdEmail className={signinStyles.icon} />
              <input
                className={signinStyles.form_input}
                type="email"
                name="email"
                value={user.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
              <i className={signinStyles.bottom_line}></i>
            </div>
            <div className={signinStyles.input_container}>
              <RiLockPasswordFill className={signinStyles.icon} />
              <input
                className={signinStyles.form_input}
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter password"
                onChange={handleChange}
              />
              <i className={signinStyles.bottom_line}></i>
            </div>
      
            <button className={signinStyles.signin_btn}>Sign in</button>
            {(err && err !== "login successfully") && (
              <p
                style={{
                  color: "red",
                  marginTop: "10px",
                }}
              >
                {err}
              </p>
            )}
            <div style={{ marginTop: "15px", textIndent: "-10px" }}>
              <span className={signinStyles.account}>Don't have account?</span>
              <Link to="/sign-up" className={signinStyles.signup_btn}>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
