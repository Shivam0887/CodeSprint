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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createUser = { fname, lname, email, password, cpassword };
    try {
      const {response} = await axios.post(
        "https://blogapi-cgoa.onrender.com/api/auth/signup",
        createUser
      );
      if(response.status)
        navigate('/sign-in')
      else
      setErr(response.data.message);
    } catch (error) {
      setErr(error.response.data.message);
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
