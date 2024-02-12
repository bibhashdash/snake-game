import React from 'react';
import './App.css';

function App() {
  return (
    <div className="h-screen flex flex-col items-center py-6">
      <div className="border-2 h-full border-black w-full max-w-xl rounded-lg grid grid-cols-auto grid-rows-12 p-4 gap-2">
        <div className="row-span-1 border-2 border-black">

        </div>
        <div className="row-span-7 border-2 border-black">

        </div>
        <div className="row-span-4 border-2 border-black w-full flex flex-col justify-center gap-2 text-4xl">
         <div className="w-full flex justify-center">
           <div className="w-fit text-center px-4 rounded-lg border-2 border-black">⬆</div>
         </div>
          <div className="flex w-full justify-center gap-4">
            <div className="w-fit text-center px-4 py-2 rounded-lg border-2 border-black">⬅</div>
            <div className="w-fit text-center px-4 py-2 rounded-lg border-2 border-black">➡</div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-fit text-center px-4 rounded-lg border-2 border-black">⬇</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
