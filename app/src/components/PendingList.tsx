

const SetData = () => {
    
}

const GetData = () => {
   return (localStorage.getItem('Pending') || 'invalid')
}



function DoneList() {
  SetData()
  localStorage.setItem('Pending', 'My name is Shasodmqodkdopwqijqw0ejq0owijeoiqwjeoiqwjeoiqjwoiejqwoejqwoijshankh')
  

  let numbers: string[] = [];

  numbers.push(GetData())

  
  const listItems = numbers.map((item) =>
<div className="flex flex-row">
<li className="w-max float-left mr-2 self-center mb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-125 border-spacing-x-2px bg-slate-600 pb-2 text-white font-bold py-2 px-4 border-2 border-blue-700 hover:border-blue-500 rounded">{item}</li>
  <button type="button" className="ml-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
  <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
</div>
);


return (
  <div className="mx-auto hover:space-x-8 min-w-fit max-w-sm pt-10 place-items-center items-center flex flex-col gap-x-1 ">
      <ul> {listItems} </ul>
  </div>
);
}

export default DoneList;