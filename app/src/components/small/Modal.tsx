import React from "react";

export default function Modal(props : {
  showModal : boolean,
  setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
  refresh : () => void
}) {
  
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
    props.setShowModal(false)
    props.refresh();
}

  return(
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Modal Title
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
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
          </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.setShowModal(false)}
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