import { createContext , useContext } from "react";
import React from "react";
// import { defaultAllowedOrigins } from "vite";

export const ThemeContext = React.createContext({
  themeMode : "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProivder = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext);
}
