import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ select, setSelect }) => {
  const { currUser, logout } = useContext(AuthContext);
  return (
    <nav>
      <div className="navbar">
        <div className="title" onClick={() => setSelect("codesprint")}>
          <Link to="/">
            <h3>&#123;CodeSprint&#125;</h3>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/practice">
            <p
              className={select === "Practice" ? "clicked" : ""}
              onClick={() => setSelect("Practice")}
            >
              Practice
            </p>
          </Link>
          <Link to="/contest">
            <p
              className={select === "Contest" ? "clicked" : ""}
              onClick={() => setSelect("Contest")}
            >
              Contest
            </p>
          </Link>
          <Link to="/courses">
            <p
              className={select === "Courses" ? "clicked" : ""}
              onClick={() => setSelect("Courses")}
            >
              Courses
            </p>
          </Link>
          <Link to="/blog-posts">
            <p
              className={select === "Blog-posts" ? "clicked" : ""}
              onClick={() => setSelect("Blog-posts")}
            >
              Blogs
            </p>
          </Link>
          <Link to="/new-blog">
            <p
              className={select === "Add blog" ? "clicked" : ""}
              onClick={() => setSelect("Add-blog")}
            >
              Add Blog
            </p>
          </Link>

          {currUser ? (
            <p
              className={select === "logout" ? "clicked" : ""}
              onClick={logout}
            >
              logout
            </p>
          ) : (
            <Link to="/sign-up">
              <p
                className={select === "Sign up" ? "clicked" : ""}
                onClick={() => setSelect("Sign up")}
              >
                Sign up
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
