import React, { useState } from 'react';
import DoneList from '../components/DoneList';
import PendingList from '../components/PendingList'
import { DefColor, GreenColor, RedColor } from '../components/small/ColorButtons';
import { useNavigate } from "react-router-dom";
import { DarkMode, DayMode } from '../components/small/icons';


function Home() {
  const [check, setCheck] = useState(true);
  const [darkToggle, setDarkToggle] = React.useState(false)

  function ValidateState()
  {
    return (!check) ? <DoneList></DoneList> : <PendingList></PendingList>
  }
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  function ColorNav(props : {name : string}){
    if(props.name === "Pending")
    {
      return (check) ? <RedColor></RedColor> : <DefColor name = {props.name} ></DefColor>
    }
    else
    {
      return (!check) ? <GreenColor></GreenColor> : <DefColor name = {props.name} ></DefColor>
    }
  }
  //Navigation to back to home
    const navi = useNavigate()
    const MakeTask = () => {
      navi('/NewTask')
    }

    function ValidateTheme(){
      return (localStorage.theme === 'dark') ? <DayMode></DayMode> : <DarkMode></DarkMode>
    }

    const ChangeTheme = () => {
      if(localStorage.theme === 'dark') localStorage.theme = 'light'
      else localStorage.theme = 'dark'
      setDarkToggle(!darkToggle)
    }

    
    
    return (
      <div className="h-screen w-screen App overflow-auto  bg-amber-100 dark:bg-black text-black dark:text-white" >
        <div className=" mb-10 dark:bg-slate-800 flex bg-red-300 p-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl text-black dark:text-white">
            <h1 className="text-5xl tracking-wide bold "> Task Manager</h1>
        </div>
        <button onClick={MakeTask} className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add New Task</button>
  
      <br></br>

      <div className="inline-flex pt-4">
          <button onClick={() => setCheck(true)} className="  font-bold py-2 px-0 rounded-l ">
            <ColorNav name = "Pending"></ColorNav>
          </button>
          <button onClick={() => setCheck(false)} className="font-bold py-2 px-0 rounded-r">
          <ColorNav name = "Done"></ColorNav>
          </button>
    </div>
      
      <ValidateState/>

      <div className="absolute bottom-8 right-8 flex flex-row">
        {/* <p> Work Hard.</p> */}
        <button onClick={ChangeTheme} className="items-center">
            <ValidateTheme></ValidateTheme>
          </button>
      </div>

      </div>

      


    );
  }
  
  export default Home;