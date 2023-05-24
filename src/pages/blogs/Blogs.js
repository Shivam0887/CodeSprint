import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BlogPosts from "../../components/blogs-posts/BlogPosts";
import blogStyles from "./Blogs.module.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res1 = await fetch("https://blogapi-cgoa.onrender.com/api/blogs");
        const res2 = await fetch(
          "https://blogapi-cgoa.onrender.com/api/blogs/recent-blogs"
        );
        const data1 = await res1.json();
        const data2 = await res2.json();
        setBlogs(data1);
        setRecentBlogs(data2);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className={blogStyles.layout}>
        <div>
          <main className={blogStyles.main}>
            <BlogPosts blogs={blogs} />
          </main>
        </div>
        <div>
          <section className={blogStyles.sidebar}>
            <p>Recent posts</p>
            <Sidebar recentBlogs={recentBlogs} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Blogs;
