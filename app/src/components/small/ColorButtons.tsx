
export function RedColor() {
    return (
        <p className=" bg-red-400 text-white-800 font-bold py-2 px-4 ">
        Pending
      </p>
    );
  }



export function GreenColor() {
return (
    <p className="bg-green-400 text-white-800 font-bold py-2 px-4 ">
    Done
    </p>
);
}



export function DefColor(props: {name: string}) {
return (
    <p className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  ">
    {props.name}
    </p>
);
}