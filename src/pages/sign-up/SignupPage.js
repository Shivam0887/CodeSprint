import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../../components/signup/Signup";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  
  const navigate = useNavigate();
  const [err, setErr] = useState();

  const { fname, lname, email, password, cpassword } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErr("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createUser = { fname, lname, email, password, cpassword };
    try {
      const {data} = await axios.post("https://blogapi-cgoa.onrender.com/api/auth/signup", createUser);
      if(data.status)
        navigate('/sign-in')
      else
        setErr(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Signup
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      user
      err={err}
    />
  );
};

export default SignupPage;
