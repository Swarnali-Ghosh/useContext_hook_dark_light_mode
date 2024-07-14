import React, { useContext } from "react";
import { ThemeContext } from "../theme-context";
// import { useTheme } from "../theme-context";


const Blog = () => {
  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`page ${theme}`}
    >
      <h1>Blog Page</h1>
      <p>Read our latest blog posts!</p>
    </div>
  );
};

export default Blog;