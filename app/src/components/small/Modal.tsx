import React from "react";
import { DarkMode, DayMode } from "./icons";

export default function Modal(props : {
  showModal : boolean,
  setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
  refresh : () => void,
  item : any,
}) {

  



  
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


  
  const handleSubmit = () =>{
    const tasks : any[] = JSON.parse( localStorage.getItem("tasks") || '[]' ) ;
    console.log(tasks);
    console.log(props.item);
    // if(tasks.length === 0) {
    //   localStorage.setItem('tasks', JSON.stringify([Task]));
    //   console.log("hi2")
    // }
    // else {
    // tasks.push(Task);
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log("hi3")
    // }
    props.setShowModal(false);
}

  



return(
    <>
      <div
        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*conte×t*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Edit Task
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
           










            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => props.setShowModal(false)}
                type="button"
                
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
     
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );}