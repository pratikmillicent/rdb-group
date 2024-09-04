import React from "react";
import HeaderBlog from "./HeaderBlog.jsx";
import Post from "./Post.jsx";
import RecentPosts from "./RecentPosts.jsx";

const BlogDetails = () => {
  return (
    <div>
      <HeaderBlog />
      <section className="blog section-padding pb-0">
        <Post />
        <RecentPosts />
      </section>
    </div>
  );
};

export default BlogDetails;
