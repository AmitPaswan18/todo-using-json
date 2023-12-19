import { useState } from "react";

function App() {
  let jsonData = {
    item1: "ddd",
    item2: "abc",
    item3: "xyz",
  };

  const [isfirstcheck, setfirstChecked] = useState(false);
  const [issecondcheck, setsecondChecked] = useState(false);
  const [isthirdcheck, setthirdChecked] = useState(false);

  function handleitemone(e) {
    setfirstChecked(e.target.value);
  }

  function handleitemtwo(e) {
    setsecondChecked(e.target.value);
  }
  function handleitemthree(e) {
    setthirdChecked(e.target.value);
  }

  return (
    <>
      <div className="flex  justify-center bg-slate-600 text-white items-center flex-col h-screen w-screen ">
        <div className=" w-1/2 text-left text-3xl">
          <div className="h-10 ">Todo App</div>
        </div>
        <div
          className="w-full flex
         flex-col justify-center items-center text-center">
          <div className="w-1/2 rounded-sm h-10 border-2 border-slate-400 ">
            <input
              type="checkbox"
              name="element2"
              value={jsonData.item3}
              onChange={(e) => handleitemone(e)}
              className="m-2"
            />
            {jsonData.item1}
            {isfirstcheck && (
              <span className="badge text-bg-success m-2">Complete</span>
            )}
          </div>
          <div className="w-1/2 pr-7 rounded-sm h-10 border-2 border-slate-400 ">
            <input type="checkbox" />
          </div>
          <div className="w-1/2  pr-7 rounded-sm h-10 border-2 border-slate-400 ">
            <input type="checkbox" />
          </div>
          <div className="w-1/2 rounded-sm h-10 border-2 border-slate-400 ">
            <input
              type="checkbox"
              name="element2"
              className="m-2"
              value={jsonData.item2}
              onChange={(e) => handleitemtwo(e)}
            />
            {jsonData.item2}
            {issecondcheck && (
              <span className="badge text-bg-success m-2">Complete</span>
            )}
          </div>
          <div className="w-1/2 rounded-sm h-10 border-2  border-slate-400 ">
            <input
              type="checkbox"
              name="element2"
              className="m-2"
              value={jsonData.item3}
              onChange={(e) => handleitemthree(e)}
            />
            {jsonData.item3}
            {isthirdcheck && (
              <span className="badge text-bg-success m-2">Complete</span>
            )}
          </div>
          <div className=" w-1/2 text-left ">
            <div className="h-8 text-2xl my-2">Todo</div>
          </div>
          <div className="w-1/2 rounded-sm text-black h-10 border-2">
            <input
              type="text"
              placeholder="Your Todo.."
              className=" w-full p-2 h-full"
            />
          </div>
          <div className=" w-1/2 text-left ">
            <button
              className="p-2 text-black border-2 rounded-md my-2 bg-white"
              type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
