import React, { useContext, useEffect, useState } from "react";

// https://reactjs.org/docs/hooks-reference.html#usecontext
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext({theme: themes.light, toggleTheme: () => {},});
  
  function UseContextDemo() {
      const [theme, setTheme] = useState('dark');
      const changeTheme = (theme) => {
          setTheme(theme)
          console.log(theme)
      }

      console.log(theme);
    return (
        <>
      <ThemeContext.Provider value={themes[theme]}>
        <Toolbar />
        <ThemeTogglerButton />
      </ThemeContext.Provider>
      <button onClick={changeTheme}>Change Theme</button>
      </>
    );
  }
  
  function ThemeTogglerButton(){

  }
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);  
    return (    <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!    </button>  );
  }

  export default UseContextDemo;