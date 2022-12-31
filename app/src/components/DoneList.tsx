

const numbers: String[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

const listItems = numbers.map((item) =>
<li className="self-center mb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border-spacing-x-2px bg-slate-600 pb-2 text-white font-bold py-2 px-4 border-2 border-blue-700 hover:border-blue-500 rounded">{item}</li>
);

function DoneList() {
    return (
      <div className="mx-auto hover:space-x-8 min-w-fit max-w-sm pt-10 place-items-center items-center flex flex-col gap-x-1 ">
          <ul> {listItems} </ul>
      </div>
    );
}
  
export default DoneList;