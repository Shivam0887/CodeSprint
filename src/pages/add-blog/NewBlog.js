import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import addBlogStyles from "./AddBlog.module.css";
import { modules, formats } from "./format";

const NewBlog = () => {
  const state = useLocation().state;
  const [blogMetaData, setBlogMetaData] = useState({
    title: state?.title || "",
    category: state?.category || "",
    difficulty: state?.difficulty || "Easy",
  });
  const [blogBody, setBlogBody] = useState(state?.blogBody || "");

  //Navigate to blogs page
  const navigate = useNavigate();

  const { title, category, difficulty } = blogMetaData;

  const handleMetaDataChange = (e) => {
    setBlogMetaData({ ...blogMetaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(state){
        const updatedBlog = { title, category, difficulty, blogBody, user: JSON.parse(localStorage.getItem("user"))};
        const {data} = await axios.put(`https://blogapi-cgoa.onrender.com/api/blogs/${state._id}`, { updatedBlog }, {withCredentials: true}) 
          if(data.status){
            toast.success("Post updated successfully");
          setTimeout(()=>{
            navigate("/blog-posts");
          }, 3000)
        }
      }
      else{
        const createBlog = { title, category, difficulty, blogBody, user: JSON.parse(localStorage.getItem("user"))};
        const {data} = await axios.post("https://blogapi-cgoa.onrender.com/api/blogs/new-blog", { createBlog }, {withCredentials: true});
          if(data.status === true){
            toast.success("Post created successfully");
          setTimeout(()=>{
            navigate("/blog-posts");
          }, 3000)
        }
      }
    } catch ({response}) {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <ToastContainer/>
      <div className={addBlogStyles.blog_container}>
        <h2
          style={{
            letterSpacing: "1.5px",
            alignSelf: "center",
            marginBottom: "15px",
          }}
        >
          New Blog
        </h2>
        <form
          onSubmit={handleSubmit}
          className={addBlogStyles.blog}
          method="POST"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            className={addBlogStyles.input_}
            onChange={handleMetaDataChange}
          />
          <input
            type="text"
            placeholder="Category, i.e., array, string, etc."
            value={category}
            name="category"
            className={addBlogStyles.input_}
            onChange={handleMetaDataChange}
          />
          <label
            htmlFor="difficulty"
            style={{
              width: "max-content",
              height: "30px",
              fontWeight: "bold",
            }}
          >
            Difficulty level
          </label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            style={{
              position: "absolute",
              top: "90px",
              left: "120px",
              width: "max-content",
            }}
            onChange={handleMetaDataChange}
            className={addBlogStyles.input_}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <ReactQuill
            placeholder="Type here..."
            theme="snow"
            value={blogBody}
            onChange={setBlogBody}
            formats={formats}
            modules={modules}
            className={addBlogStyles.text_editor}
          />
          <button className={addBlogStyles.post}>Post</button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
