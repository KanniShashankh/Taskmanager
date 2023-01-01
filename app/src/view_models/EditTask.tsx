import React from "react"
import { DarkMode, DayMode } from "../components/small/icons"

function EditTask() {

  const [darkToggle, setDarkToggle] = React.useState(false)

  const ChangeTheme = () => {
    if(localStorage.theme === 'dark') localStorage.theme = 'light'
    else localStorage.theme = 'dark'
    setDarkToggle(!darkToggle)
  }

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function ValidateTheme(){
    return (localStorage.theme === 'dark') ? <DayMode></DayMode> : <DarkMode></DarkMode>
  }

    return (
      <div className="App bg-white-400 dark:bg-black text-black dark:text-white h-screen	w-screen ">
       
      <div className="bg-slate-300 mb-10 dark:bg-slate-800 flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl text-black dark:text-white">
          <h1 className="bold "> Task Manager</h1>
      </div>

      <div className="absolute bottom-8 right-8">
        <button onClick={ChangeTheme} className="items-center">
            <ValidateTheme></ValidateTheme>
          </button>
      </div>
      </div>
    );
  }
  
  export default EditTask;