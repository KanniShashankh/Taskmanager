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


        <div className="items-center mx-auto justify-center">
          <form>
            

            <div className="relative mx-auto mb-6 w-1/3 group ">
                <label htmlFor="large-input" className="font-medium absolute text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Title</label>
                <input type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div className="relative mx-auto mb-6 w-1/3 group ">
              <label htmlFor="message" className="font-small items-center absolute text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Description</label>
              <textarea id="message" className="block p-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
            </div>
              

          </form>

        </div>


      <div className="flex felx-row space-x-4 justify-center items-center">
      
      
        <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date" />
          <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
          <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
            <i className="fas fa-calendar datepicker-toggle-icon"></i>
          </button>
        </div>

              <div className="flex justify-center">
        <div className="timepicker relative form-floating mb-3 xl:w-96">
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date" />
          <label htmlFor="floatingInput" className="text-gray-700">Select a time</label>
        </div>
      </div>

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