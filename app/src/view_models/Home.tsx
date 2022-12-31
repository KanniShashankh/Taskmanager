import React, { useState } from 'react';
import DoneList from '../components/DoneList';
import PendingList from '../components/PendingList'
import { DefColor, GreenColor, RedColor } from '../components/small/ColorButtons';
import { useNavigate } from "react-router-dom";


function Home() {
  const [check, setCheck] = useState(true );

  function ValidateState(){
    return (check) ? <DoneList></DoneList> : <PendingList></PendingList>
  }

  function ColorNav(props : {name : string}){
    
    if(props.name === "Pending"){
      return (check) ? <RedColor></RedColor> : <DefColor name = {props.name} ></DefColor>
    }
    else{
      return (!check) ? <GreenColor></GreenColor> : <DefColor name = {props.name} ></DefColor>
    }
  }
  const navi = useNavigate()

    const MakeTask = () => {
      navi('/NewTask')
    }
  

    return (
      <div className="App">
        <div className="flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl">
            <h1 className="first-letter:text-red-500	"> Task</h1>
            <h1 className=" first-letter:text-green-500"> Manager</h1>
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
    
      </div>
    );
  }
  
  export default Home;