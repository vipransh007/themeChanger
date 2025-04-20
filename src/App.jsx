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
