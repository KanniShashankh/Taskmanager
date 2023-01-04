import React, { useEffect, useState } from "react";
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
        start_date: "", 
        start_time: "",
        end_date: "", 
        end_time: "",
        done: false
      } 
    );

    //make all fields of the form required and do not let them submit if they are empty
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start_date, setStart_date] = useState(""); 
    const [start_time, setStart_time] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [end_time, setEnd_time] = useState("");
    
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [start_dateError, setStart_dateError] = useState("");
    const [start_timeError, setStart_timeError] = useState("");
    const [end_dateError, setEnd_dateError] = useState("");
    const [end_timeError, setEnd_timeError] = useState("");
    
    const handleTitle = (e: any) => {
      setTitle(e.target.value);
      if (e.target.value.length < 1) {
        setTitleError("Title is required!");
      } else if (e.target.value.length > 20) {
        setTitleError("Title needs to be 20 characters or less!");
      } else {
        setTitleError("");
      }
    };
    
    const handleDescription = (e: any) => {
      setDescription(e.target.value);
      if (e.target.value.length < 1) {
        setDescriptionError("Description is required!");
      } else if (e.target.value.length > 100) {
        setDescriptionError("Description needs to be 100 characters or less!");
      } else {
        setDescriptionError("");
      }
    };

    const handleStart_date = (e: any) => {
      setStart_date(e.target.value);
      if (e.target.value.length < 1) {
        setStart_dateError("Start date is required!");
      } else {
        setStart_dateError("");
      }
    };

    const handleStart_time = (e: any) => {
      setStart_time(e.target.value);
      if (e.target.value.length < 1) {
        setStart_timeError("Start time is required!");
      } else {
        setStart_timeError("");
      }
    };

    const handleEnd_date = (e: any) => {
      setEnd_date(e.target.value);
      if (e.target.value.length < 1) {
        setEnd_dateError("End date is required!");
      } else {
        setEnd_dateError("");
      }
    };

    const handleEnd_time = (e: any) => {
      setEnd_time(e.target.value);
      if (e.target.value.length < 1) {
        setEnd_timeError("End time is required!");
      } else {
        setEnd_timeError("");
      }
    };

    // const handleSubmit = (e: any) => {
    //   e.preventDefault();
    //   if (titleError || descriptionError || start_dateError || start_timeError || end_dateError || end_timeError) {
    //     alert("Please fill out the form correctly before submitting!");
    //   } else {
    //     NewTask({
    //       title: title,
    //       description: description,
    //       start_date: start_date,
    //       start_time: start_time,
    //       end_date: end_date,
    //       end_time: end_time,
    //       done: false
    //     });
    //     localStorage.setItem('tasks', JSON.stringify([Task]));
    //     GoHome();
    //   }
    // };
    
      
    
    const handleSubmit = () =>{
      const tasks : { title: string,      
      description: string,  
      start_date: string, 
      start_time: string,
      end_date: string, 
      end_time: string,
      done: boolean}[] = JSON.parse( localStorage.getItem("tasks") || '[]' );
      if(tasks.length === 0) {
        localStorage.setItem('tasks', JSON.stringify([Task]));
      }
      else {
      tasks.push(Task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    GoHome();
  }

    //Navigation to back to home
    const navi = useNavigate()
    const GoHome = () => {
      navi('/')
    }

    const [useCurrent, setUseCurrent] = useState(false);

    function localTime(date : any) {
      var tzo = -date.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function(num : number) {
              return (num < 10 ? '0' : '') + num;
          };
    
      return date.getFullYear() +
          '-' + pad(date.getMonth() + 1) +
          '-' + pad(date.getDate()) +
          'T' + pad(date.getHours()) +
          ':' + pad(date.getMinutes()) +
          ':' + pad(date.getSeconds()) +
          dif + pad(Math.floor(Math.abs(tzo) / 60)) +
          ':' + pad(Math.abs(tzo) % 60);
    }

    useEffect(() => {
      if (useCurrent) {
        const cur = new Date();
        const now = localTime(cur);
        const date = now.substring(0, 10);
        const time = now.substring(11, 5);
        const temp = Task
        temp.start_date = date
        temp.start_time = time
        NewTask(temp);
      }
    }, [useCurrent]);
   


    return (
        <>
      <div className="h-screen w-screen App overflow-auto hover:overflow-scroll bg-amber-100 dark:bg-black text-black dark:text-white" >
      <div className=" mb-10 dark:bg-slate-800 flex pb-5 bg-red-300 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl text-black dark:text-white">
            <h1 className="bold "> Task Manager</h1>
        </div>
        <div className="items-center mx-auto justify-center ">
          <form>
            <p className="bold text-center text-2xl relative mx-auto mb-6 w-1/3 group form-check-inline"> Task Details </p>
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



          <div>
            <div className="flex items-center mx-auto mb-6 w-1/3 group form-check-inline">
              <input 
                id="curtime"
                className="items-center form-checkbox"
                type="checkbox"
                checked={useCurrent}
                onChange={(e) => setUseCurrent(e.target.checked)}
              />
              <label className="align-baseline float-right ml-4">Use current date and time for start</label>
            </div>
          </div>
            
           <div className="relative space-y-2 mx-auto mb-6 w-1/3 group form-check-inline">
            <div className="flex items-center">
            {!useCurrent && (<label htmlFor="start" className="font-small items-center absolute text-sm top-0 
             left-0 text-blue-600 dark:text-blue-500 scale-75">Start Date and Time</label>)}
              
              <input 
              id="start" 
              className={(useCurrent) ? "grow mx-auto items-center w-1/2 px-4 py-4 rounded-l-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400" : "grow items-center w-1/2 px-4 py-4 rounded-l-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"}
              type="date"
              onChange={(event) => {
                const temp = Task
                temp.start_date = event.target.value   
                NewTask(Task);
              }}
              disabled={useCurrent} />
              <input 
              disabled={useCurrent}
              onChange={(event) => {
                const temp = Task
                temp.start_time = event.target.value   
                NewTask(Task);
              }}
              className={(useCurrent) ? "grow mx-auto items-center w-1/2 px-4 py-4 rounded-r-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400" : "grow items-center w-1/2 px-4 py-4 rounded-r-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"}
               type="time" />
            </div>
          </div>






          <div className="relative space-y-2 mx-auto mb-6 w-1/3 group form-check-inline">
            <div className="flex items-center">
            <label htmlFor="start" className="font-small items-center absolute text-sm top-0 
             left-0 text-blue-600 dark:text-blue-500 scale-75">End Date and Time</label>

              <input id="start" 
              onChange={(event) => {
                const temp = Task
                temp.end_date = event.target.value   
                NewTask(Task);
              }}
              className="w-1/2 px-4 py-4 rounded-l-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400" type="date" />
              <input 
              onChange={(event) => {
                const temp = Task
                temp.end_time = event.target.value   
                NewTask(Task);
              }}
              className="w-1/2 px-4 py-4 rounded-r-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border bg-gray-50 border-gray-400" type="time" />
            </div>
          </div>
          
          {/* <DateTimePicker></DateTimePicker> */}


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