import React, { useState } from 'react';

function Home() {

  const [check, setCheck] = useState(false);
    

    return (
      <div className="App">
        <div className="flex pb-5 pt-10 justify-center space-x-4 auto-rows-auto font-bold text-3xl">
            <h1 className="first-letter:text-green-500	"> Task</h1>
            <h1 className=" first-letter:text-blue-500"> Manager</h1>
        </div>
        <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add New Task</button>



        <div className="pt-10 flex flex-col">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>
      <p>You clicked {check} times</p>
      <button onClick={() => setCheck(prevCheck => !prevCheck) }>
        Click me
      </button>
    </div>
        </div>

      </div>
    );
  }
  
  export default Home;