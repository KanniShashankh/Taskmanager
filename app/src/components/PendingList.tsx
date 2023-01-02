import React, { useState } from 'react';
import Modal from './small/Modal';

function PendingList() {
  
  const [numbers, setNumbers] = useState(JSON.parse(localStorage.getItem('tasks') || '[]'));
  
  
  const handleFinish = (index : number) => {
    let num = numbers 
    num[index].done = true;
    setNumbers(num);
    localStorage.setItem('tasks', JSON.stringify(numbers));
    Refresh()
  };

  


  const handleDelete = async (index : number) => {
    const temp = JSON.parse(localStorage.getItem("tasks") || '[]');
    let  num = [ ...temp.slice(0,index) , ...temp.slice(index+1)]
    console.log(num, num.length)
    await setNumbers(num);
    await localStorage.setItem("tasks", JSON.stringify(num));
    Refresh();
    }



  const [refresh, setRefresh] = useState(false)
  const Refresh = () => {
    setRefresh(!refresh)
  }

  // create a modal in tailwind css for making edits to the tasks
  // const toggleModal = () => {
  //   setModal(!modal)
  // }




  const [showModal, setShowModal] = useState(false);

  function EditHandle(item : any){
    setShowModal(true);
  }

  return (
    <>
      
      <div className="mx-auto hover:space-x-8 min-w-fit max-w-sm pt-10 place-items-center items-center flex flex-col gap-x-1 ">
          <ul> {
          numbers.map((item:any) => {
        if(item.done == false) {
    return (<div className="flex flex-row">
    <li className="grow float-left mr-2 self-center mb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-125 border-spacing-x-2px bg-slate-600 pb-2 text-white font-bold py-2 px-4 border-2 border-blue-700 hover:border-blue-500 rounded minw-max">{item.title}</li>
      <button onClick={() => {
        setShowModal(true);
        <Modal showModal={showModal} setShowModal={setShowModal} refresh = {Refresh} item={numbers.item}/>
      }} className="  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
    <button onClick={ () => handleFinish(numbers.indexOf(item))} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Done</button>
      <button onClick={ () => handleDelete(numbers.indexOf(item))} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    </div>)}} 
    )
    } </ul>
      </div>
      
      
      </>
    );
  }

export default PendingList;