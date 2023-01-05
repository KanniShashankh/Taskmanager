import React, { useEffect } from "react";

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
  const [edit,setEdit] = React.useState(false);

  
  const handleSubmit = () =>{
    const tasks : any[] = JSON.parse( localStorage.getItem("tasks") || '[]' ) ;
    tasks[props.item] = Task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setEdit(false);
    // props.setShowModal(false);
}

  useEffect(()=>{
    const tasks : any[] = JSON.parse( localStorage.getItem("tasks") || '[]' ) ;
    if(props.item >= 0){
      NewTask(tasks[props.item]);
    }
  },[props.item])
  
      window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          props.setShowModal(false);
        }
      });



return(
    <>
      <div
        className="backdrop-opacity-50	 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "
      >
        <div className="relative my-6 mx-auto min-w-[50%] max-w-[85%] flex-nowrap rounded">
          <div   className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-700 dark:outline dark:outline-white ">

            <div className="flex justify-center p-7 border-b border-solid border-slate-200 rounded flex-nowrap">
              <h3 className="text-3xl justify-center text-center text-black dark:text-white font-semibold">
                {Task.title}
              </h3>
              <button onClick={() => props.setShowModal(false)}
                className="p-1 ml-auto border-0 text-black float-right text-3xl font-semibold"
              >
                
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
              </button>
            </div>
            


            <div className="flex relative p-2 flex-auto flex-nowrap">
              <div className=" self-center shrink-0 w-[33%] float-left outline outline-neutral-600 dark:outline-slate-400 justify-start mx-5 my-3 px-4 py-3 border-solid border-slate-200 rounded">
              <h3 className="self-center text-xl justify-start text-center text-black dark:text-white font-bold">
                Description
              </h3>
            </div>
            <div className="grow float-right   justify-start mx-5 my-3 border-slate-200 rounded  flex-nowrap">
              {/* <p className=" justify-start text-black text-center dark:text-white font-semibold">
                {Task.description}
              </p> */}
              <div className="relative mx-auto w-full  group ">
              <textarea
              disabled={!edit}
              value={Task.description}
              placeholder="Enter Description"
              onChange={(e) => NewTask({ ...Task, description: e.target.value })} id="message_box" className="block p-2 w-full justify-center self-center text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>  

            </div>
            </div>


            <div className="flex relative p-2 flex-auto flex-nowrap">
              <div className="shrink-0 self-center w-[33%] float-left outline outline-neutral-600 dark:outline-slate-400 justify-start mx-5 my-3 px-4 py-3 border-solid border-slate-200 rounded">
              <h3 className="self-center text-xl  justify-start text-center text-black dark:text-white font-bold">
              Begin Date
              </h3>
            </div>
            
            

            <div className="grow flex relative mx-5 my-3 w-full justify-center self-center group form-check-inline">
            <div className="grow flex items-center">
                <input 
                className= " items-center w-1/2 px-4 py-4 rounded-l-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"
                type="date" 

                value={Task.start_date}
                onChange={(e) => NewTask({ ...Task, start_date: e.target.value })}
                disabled={!edit} />
              <input 
              disabled={!edit}
              onChange={(e) => NewTask({ ...Task, start_time: e.target.value })}
              value={Task.start_time}

              className= " items-center w-1/2 px-4 py-4 rounded-r-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"
               type="time" />
            </div>
          </div>   



           
            </div>

            


          


          <div className="flex relative mb-3 p-2 flex-auto flex-nowrap">
              <div className="shrink-0 self-center w-[33%] float-left outline outline-neutral-600 dark:outline-slate-400 justify-start mx-5 my-3 px-4 py-3 border-solid border-slate-200 rounded">
              <h3 className="self-center text-xl justify-start text-center text-black dark:text-white font-bold">
                Due Date  
              </h3>
            </div>
            

<div className="grow flex relative mx-5 my-3w-full justify-center self-center group form-check-inline">
            <div className="grow flex items-center">
                <input 
                className= " items-center w-1/2 px-4 py-4 rounded-l-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"
                type="date" 

                value={Task.end_date}
                onChange={(e) => NewTask({ ...Task, end_date: e.target.value })}
                disabled={!edit} />
              <input 
              disabled={!edit}
              onChange={(e) => NewTask({ ...Task, end_time: e.target.value })}
              value={Task.end_time}

              className= " items-center w-1/2 px-4 py-4 rounded-r-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-400"
               type="time" />
            </div>
          </div>   


            </div>

           


  
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => props.setShowModal(false)}
                type="button"
                
              >
                Close
              </button>
              {edit?<button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Save Changes
              </button>:
              <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>setEdit(!edit)}
            >
              Edit Task
            </button>
            }
            </div>
          </div>
        </div>
      </div> 
     
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
      
    </>
  );}
