import React, { useState } from 'react';
import Modal from './small/Modal';
import EditTask from '../view_models/EditTask';

function DoneList() {
  
  const [numbers, setNumbers] = useState(JSON.parse(localStorage.getItem('tasks') || '[]'));
  
  
  const handleFinish = (index : number) => {
    let num = numbers 
    num[index].done = false;
    setNumbers(num);
    localStorage.setItem('tasks', JSON.stringify(numbers));
    Refresh()
  };

  const handleDelete =  (index : number) => {
    const temp = JSON.parse(localStorage.getItem("tasks") || '[]');
    let  num = [ ...temp.slice(0,index) , ...temp.slice(index+1)]
     setNumbers(num);
     localStorage.setItem("tasks", JSON.stringify(num));
    Refresh();
    }



  const [showModal, setShowModal] = useState(false);


  
  const [item, setItem] = useState({});




  const [refresh, setRefresh] = useState(false)
  const Refresh = () => {
    setRefresh(!refresh)
  }
  
//make the button with id edit to open the modal
 

return (
  <>
    {showModal ? <Modal setShowModal={setShowModal} showModal={showModal} refresh = {Refresh} item={numbers.indexOf(item)} ></Modal> : 

    <div className="mx-auto hover:space-x-8 min-w-fit pt-10 place-items-center items-center flex flex-col gap-x-1 ">
        <ul> {
        numbers.map((item:any) => {
      if(item.done === true) {    
  return (<div className="flex flex-row">
  <button onClick={ () => {
      setItem(item);
      setShowModal(!showModal);
    }} className="grow float-left mr-2 self-center mb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-125 border-spacing-x-2px bg-slate-600 pb-2 text-white font-bold py-2 px-4 border-2 border-blue-700 hover:border-blue-500 rounded minw-max">{item.title}</button>
  
    <button onClick={ () => handleFinish(numbers.indexOf(item))} className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">Pending</button>
    <button onClick={ () => handleDelete(numbers.indexOf(item))} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
  </div>)}
  else return null;} 
  )
  } </ul>
    </div>
    
    }
    </>
  );
  
  }

export default DoneList;

