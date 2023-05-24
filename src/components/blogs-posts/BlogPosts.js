import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import blogPostStyles from "./BlogPosts.module.css";

const BlogPosts = ({ blogs }) => {
  return (
    <>
      {blogs.length > 0 &&
        blogs.map((blog) => {
          return (
            <div key={blog._id} className={blogPostStyles.container}>
              <div className={blogPostStyles.blog_container}>
                <h2 className={blogPostStyles.title}>Problem: {blog.title}</h2>
                <h4> Category: {blog.category}</h4>
                <div className={blogPostStyles.desc}>
                  {parser(
                    blog.blogBody.substring(
                      0,
                      Math.min(blog.blogBody.length, 350)
                    )
                  )}
                </div>
                <Link
                  to={`/blog-posts/${blog._id}`}
                  style={{ width: "max-content" }}
                >
                  <button className={blogPostStyles.btn}>Read more</button>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BlogPosts;
