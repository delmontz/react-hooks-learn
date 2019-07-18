import React, { useState } from 'react';

function App() {
   const [count, setCount] = useState(0);

   const increment = () => setCount(count + 1);
   const decrement = () => setCount(count - 1);
   const increment2 = () => setCount(previousCount => previousCount + 1);
   const decrement2 = () => setCount(hoge => {
      return hoge - 1;
   });
   const reset = () => setCount(0);

   return (
      <> 
         <div>カウント: { count }</div>
         <div>
            <button onClick={ increment }>＋１</button>
            <button onClick={ decrement }>ー１</button>
         </div>
         <div>
            <button onClick={ increment2 }>＋１</button>
            <button onClick={ decrement2 }>ー１</button>
         </div>
         <div>
            <button onClick={ reset }>Reset</button>
            <button onClick={ reset }>Reset</button>
         </div>
      </>
   );
}

export default App;
