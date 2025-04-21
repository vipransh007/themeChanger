<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import { useEffect, useState } from "react";
import { ThemeProivder } from "./context/theme"
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  const [themeMode , setThemeMode] = useState("light")

const lightTheme = () =>{
  setThemeMode("light");
}
const darkTheme = () =>{
  setThemeMode("dark")
}


//actaull change in the theme 
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")

  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeProivder value={{ themeMode, lightTheme, darkTheme }}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* ThemeButton */}
          <ThemeBtn/>


        </div>
        <p>hello</p>
        <div className="w-full max-w-sm mx-auto">
          {/* Card Component */}
          <Card/>
        </div>
      </div>
    </div>
  </ThemeProivder>
);
}

export default App;
>>>>>>> ad9044debe53e02b3dc9767f05bbce9e74c59b1e
