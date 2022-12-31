import React, { useState } from 'react';
import DoneList from '../components/DoneList';
import PendingList from '../components/PendingList'

var value = localStorage.getItem("chanceofdeath");
localStorage.setItem('myCat', 'Tom');

function Home() {
  const [check, setCheck] = useState(false);
  function ValidateState(){
    return (check) ? <DoneList></DoneList> : <PendingList></PendingList>
  }
    return (
      <div className="App">
        <div className="flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl">
            <h1 className="first-letter:text-green-500	"> Task</h1>
            <h1 className=" first-letter:text-blue-500"> Manager</h1>
        </div>
        <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add New Task</button>
      
      <br></br>

      <div className="flex items-center justify-center w-full mb-12">
  
  <label htmlFor="toggleB" className="flex items-center cursor-pointer">
    <div className="relative">
      <input type="checkbox" id="toggleB" className="sr-only"/>
      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <div className="ml-3 text-gray-700 font-medium">
      Toggle Me!
    </div>
  </label>

</div>



      <p className="bold text-xl"> {(check)?"Pending":"Done"}</p>
      <button className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" onClick={() => setCheck(prevCheck => !prevCheck) }>
        This button
      </button>
      

      <ValidateState/>
    
      </div>
    );
  }
  
  export default Home;