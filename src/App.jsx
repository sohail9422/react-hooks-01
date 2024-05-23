import { useState,useEffect } from "react";
import Example from './Example.jsx'

const App = () => {
  let [click,setClick] = useState(0)
  useEffect(() => {
     document.title =`You have clicked ${click} many times`
    
  });
  return (
    
    <div>
      <h4>You have clicked {click} Times</h4>
      <button style={{margin:"20px"}} onClick={()=>{setClick(click+1)}}>+</button>
      <button onClick={()=>{setClick(click-1)}}>-</button>
      <Example />
    </div>
  );
};

export default App;
