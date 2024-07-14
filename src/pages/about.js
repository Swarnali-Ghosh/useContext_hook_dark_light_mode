import React, { useContext } from "react";
// import { useTheme } from "../theme-context";
import { ThemeContext } from "../theme-context";

const About = () => {
  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`page ${theme}`}
    >
      <h1>About Page</h1>
      <p>Learn more about us here!</p>
    </div>
  );
};

export default About;