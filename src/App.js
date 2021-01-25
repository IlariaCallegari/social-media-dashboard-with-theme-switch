import React from "react";
import Dashboard from "./components/Dashboard";
import useStyles from "./styles/AppStyles";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const classes = useStyles();
  const { App } = classes;

  return (
    <ThemeProvider>
      <div className={App}>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
