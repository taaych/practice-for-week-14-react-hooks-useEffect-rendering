import { useEffect, useState } from "react";

const Main = () => {
    const [ToggleOne, setToggleOne] = useState(false);
    const [ToggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('UseEffect1 Ran');
    }, [])
    
    useEffect(() => {
        console.log('useEffect2 Ran');
        if(ToggleTwo){
            console.log('ToggleTwo slice of state is true so this code runs')
        }
    }, [ToggleTwo]);
    
    useEffect(() => {
        let myInterval = setInterval(() => {
          console.log(`UseEffect3 with interval number ${count} is running`);
      }, 500); 
      
      return () => {
          console.log(`UseEffect3 cleanup ran. \n setInterval number ${count} is being cleared out.`);
      clearInterval(myInterval);
      }; 
    }, [count])
    
    return(
        <div>
            {console.log('rendered or re-rendered')}
            <h1>Main Component</h1>    
            <button onClick={() => {setToggleOne(!ToggleOne)}} >ToggleOne</button>       
            <button onClick={() => {setToggleTwo(!ToggleTwo)}} >ToggleTwo</button>
            <button onClick={() => {setCount((prevCount) => prevCount + 1)}}>Count</button>
        </div>
    )
};

export default Main;