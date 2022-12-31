

const SetData = () => {
    
}

const GetData = () => {
   return (localStorage.getItem('Pending') || 'invalid')
}



function DoneList() {
  SetData()
  localStorage.setItem('Pending', 'My name is Shashankh')


  let numbers: string[] = [];

  numbers.push(GetData())
  const listItems = numbers.map((item) =>
<li style={{"width":500}} className="self-center mb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border-spacing-x-2px bg-slate-600 pb-2 text-white font-bold py-2 px-4 border-2 border-blue-700 hover:border-blue-500 rounded">{item}</li>
);
  return (
    
    <div className="mx-auto hover:space-x-8 min-w-fit max-w-sm pt-6 place-items-center items-center flex flex-col gap-x-1" >
          <ul> {listItems} </ul>
    </div>
  );
}

export default DoneList;