import { useState } from "react";


const Counter = () =>{
    const [counter,setCounter] = useState(0);

    const IncrementCounter = ()=>{       
        // if(counter < 20){
            setCounter(counter + 1);
        // }
        
    }

    const DecrementCounter = ()=>{        
        if(counter > 0){
            setCounter(counter - 1);
        }
        
    }
    return (
        <div className="counterDiv">
            {counter}
            <br/>
            <div className="btnGroup">
                <button className="increment" onClick={IncrementCounter} > + </button>
                <button className="decrement" onClick={DecrementCounter} > - </button>
            </div>
        </div>
    );
}

export default Counter;