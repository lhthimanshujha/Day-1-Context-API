import React from "react";
import { useTheme } from "../home/ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={"flex h-screen items-center justify-center"}
      style={{
        height: "100vh",
        background: theme === "light" ? "#ffffff" : "#333333"
      }}
    >
      <button
        onClick={toggleTheme}
        className="rounded-md bg-primary-10 px-4 py-2 text-black-10"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default MyComponent;
