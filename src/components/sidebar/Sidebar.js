import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import sidebarStyles from "../blogs-posts/BlogPosts.module.css";

const Sidebar = ({ recentBlogs }) => {
  return (
    <>
      {recentBlogs.length > 0 &&
        recentBlogs.map((blog) => {
          return (
            <div key={blog._id} className={sidebarStyles.container}>
              <div className={sidebarStyles.blog_container}>
                <h3 className={sidebarStyles.title}>Problem: {blog.title}</h3>
                <p style={{fontWeight: "bold"}}> Category: {blog.category}</p>
                <div className={sidebarStyles.desc}>
                  {parser(
                    blog.blogBody.substring(
                      0,
                      Math.min(blog.blogBody.length, 100)
                    )
                  )}
                </div>
                <Link
                  to={`/blog-posts/${blog._id}`}
                  style={{ width: "max-content" }}
                >
                  <button className={sidebarStyles.btn}>Read more</button>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Sidebar;
