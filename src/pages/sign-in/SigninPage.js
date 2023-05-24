import { useState, useContext } from "react";
import { AuthContext } from "../../components/context/authContext";
import Signin from "../../components/signin/Signin";

const SignInPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
 
  const [err, setErr] = useState();
  const { email, password } = user;
  const { signin } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateUser = { email, password };
    try {
      await signin(validateUser, setErr);        
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Signin
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      user={user}
      err={err}
    />
  );
};

export default SignInPage;
