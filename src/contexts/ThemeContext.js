import React, { createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(!theme);
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider}; 