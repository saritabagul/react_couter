import { useState } from "react";

const Counter = () =>{
    const [counter,setCounter] = useState(0);

    const IncrementCounter = ()=>{       
        if(counter < 20){
            setCounter(counter + 1);
        }
        
    }

    const DecrementCounter = ()=>{        
        if(counter > 0){
            setCounter(counter - 1);
        }
        
    }
    return (
        <div style={{textAlign:"center",margin:50}}>
            {counter}
            <br/>
            <button onClick={IncrementCounter} > + </button>
            <button onClick={DecrementCounter} > - </button>
        </div>
    );
}

export default Counter;