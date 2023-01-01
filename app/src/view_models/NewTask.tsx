import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkMode, DayMode } from "../components/small/icons";



function NewTask() {
  
  const [darkToggle, setDarkToggle] = React.useState(false)


    const navi = useNavigate()

    const GoHome = () => {
      navi('/')
    }

    const ChangeTheme = () => {
      if(localStorage.theme === 'dark') localStorage.theme = 'light'
      else localStorage.theme = 'dark'
      setDarkToggle(!darkToggle)
    }

    function ValidateTheme(){
      return (localStorage.theme === 'dark') ? <DayMode></DayMode> : <DarkMode></DarkMode>
    }




    return (
      
      <div className="App bg-white dark:bg-black text-black dark:text-white h-screen w-screen	place-self-center ">

      <div className="bg-blue mb-10 dark:bg-slate-800 flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl text-black dark:text-white">
            <h1 className="first-letter:text-red-500 "> Task</h1>
            <h1 className=" first-letter:text-green-500"> Manager</h1>
        </div>



      <div className="flex flex-row space-x-4 justify-center items-center">
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Save changes
        </button>
        <button onClick={GoHome} className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Back to Home
        </button>
      </div>
        

      <div className="absolute bottom-8 right-8">
        <button onClick={ChangeTheme} className="items-center">
            <ValidateTheme></ValidateTheme>
          </button>
      </div>

      
      </div>
    );
  }
  
  export default NewTask;