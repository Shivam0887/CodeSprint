import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import parser from "html-react-parser";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import blogStyles from "./Blog.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const [blogInfo, setBlogInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { currUser } = useContext(AuthContext);

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://blogapi-cgoa.onrender.com/api/blogs/${postId}`);
        const data = await res.json();
        setBlogInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [postId]);

  const difficulty_color = {
    Easy: "green",
    Medium: "orange",
    Hard: "red",
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://blogapi-cgoa.onrender.com/api/blogs/${postId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if(data.status === true){
          toast.success("Post deleted successfully");
          setTimeout(()=>{
            navigate("/blog-posts");
          }, 3000)
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  // const date = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  // moment(date).fromNow();

  return (
    <>
      {Object.keys(blogInfo).length > 0 && (
        <>
          <ToastContainer/>
          <div className={blogStyles.box}>
            <button
              onClick={() => navigate(-1)}
              className={blogStyles.back_btn}
            >
              &lt; Back
            </button>
            <div className={blogStyles.details}>
              <p>
                Author:{" "}
                {blogInfo.fname.charAt(0).toUpperCase() +
                  blogInfo.fname.slice(1)}{" "}
                {blogInfo.lname.charAt(0).toUpperCase() +
                  blogInfo.lname.slice(1)}
              </p>
              <p>Posted: {moment(blogInfo.blog.createdAt).format("DD-MM-YYYY h:mm a")}</p>{blogInfo.blog.updatedAt && <p>Last update: {moment(blogInfo.blog.updatedAt).format("DD-MM-YYYY h:mm a")}</p>}
            </div>
          </div>
          <div className={blogStyles.blog_container}>
            <h1>
              Problem: {blogInfo.blog.title}
              {(currUser && (JSON.parse(localStorage.getItem("user"))._id === blogInfo?.uid)) && (
                <>
                  <Link to={`/new-blog/?edit=2`} state={blogInfo.blog}>
                    <FiEdit id={blogStyles.updateIcon} />
                  </Link>

                  <AiFillDelete
                    id={blogStyles.deleteIcon}
                    onClick={handleDelete}
                  />
                </>
              )}
            </h1>
            <div className={blogStyles.metaData}>
              <span>
                <p style={{ display: "inline" }}>Difficulty:</p>
                <p
                  style={{
                    color: difficulty_color[blogInfo.blog.difficulty],
                    display: "inline",
                  }}
                >
                  {` ${blogInfo.blog.difficulty}`}
                </p>
              </span>
              <p>Category: {blogInfo.blog.category} </p>
            </div>
            <div className={blogStyles.desc}>
              <h3>Explanation:</h3>
              {parser(blogInfo.blog.blogBody)}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
