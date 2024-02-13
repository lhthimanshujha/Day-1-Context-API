import React from "react";
import MyComponent from "../MyComponent/MyComponent";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <MyComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
