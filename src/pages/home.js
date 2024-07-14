import React, { useContext } from "react";
// import { useTheme } from "../theme-context";
import { ThemeContext } from "../theme-context";

const Home = () => {
  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`page ${theme}`}
    >
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;