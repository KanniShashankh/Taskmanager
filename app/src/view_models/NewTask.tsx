import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkMode, DayMode } from "../components/small/icons";



function NewTask() {
  
    // DARK MODE SUPPORT
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

    const [Task, NewTask] = React.useState(
      {         
        title: "",      
        description: "",  
        date: "", 
        time: "",
        done: false
      } 
    );
    
    const handleSubmit = () =>{
      const tasks : any[] = JSON.parse( localStorage.getItem("tasks") || '[]' ) ;
      
      console.log(tasks);
      if(tasks.length === 0) {
        localStorage.setItem('tasks', JSON.stringify([Task]));
        console.log("hi2")
      }
      else {
      tasks.push(Task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log("hi3")
    }
    GoHome();
  }

    //Navigation to back to home
    const navi = useNavigate()
    const GoHome = () => {
      navi('/')
    }

    return (
   
        <>
      <div className="App bg-white-400 dark:bg-black text-black dark:text-white h-screen	w-screen ">
        <div className="bg-slate-300 mb-10 dark:bg-slate-800 flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl text-black dark:text-white">
            <h1 className="bold "> Task Manager</h1>
        </div>

        <div className="items-center mx-auto justify-center">
          <form>
            <p className="bold text-center text-2xl pb-4 "> Add New Task </p>
            <div className="relative mx-auto mb-6 w-1/3 group ">
              <label htmlFor="large-input" className="font-medium absolute text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Title</label>
              <input 
              onChange={(event) => {
                const temp = Task
                temp.title = event.target.value   
                NewTask(Task);
              }}
             type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div className="relative mx-auto mb-6 w-1/3 group ">
              <label htmlFor="message" className="font-small items-center absolute text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Description</label>
              <textarea onChange={(event) => {
                const temp = Task
                temp.description = event.target.value   
                NewTask(Task);
              }} id="message" className="block p-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
            </div>  
            

        <div className="flex-row flex justify-center place-items-center relative mb-6 w-1/3 items-center">
            <label htmlFor="large-date" className="font-medium  text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Date</label>
            <input onChange={(event) => {
                const temp = Task
                temp.date = event.target.value   
                NewTask(Task);
              }} type="date" id="large-date" className="block p-4 w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
            <label htmlFor="large-time" className="font-medium  text-sm  left-0 text-blue-600 dark:text-blue-500 scale-75">Time</label>
            <input onChange={(event) => {
                const temp = Task
                temp.time = event.target.value   
                NewTask(Task);
              }}
              type="time" id="large-time" className="block p-4 w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="flex flex-row space-x-4 justify-center items-center">
          <button type="button" onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Save changes
          </button>
          <button type="button" onClick={GoHome} className="py-2 px-4  bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Back to Home
          </button>
        </div>
          </form>
        </div>




      
        

      <div className="absolute bottom-8 right-8">
        <button onClick={ChangeTheme} className="items-center">
            <ValidateTheme></ValidateTheme>
          </button>
      </div>
      </div>
      </>
      
    
    );
  }
  
  export default NewTask;