import React, { createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [isDark, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(!isDark);
    }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider}; 