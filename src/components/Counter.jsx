import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const counterCont = useContext(CounterContext);
  return (
    <div>
      <button onClick={()=>{counterCont.setCount(counterCont.count + 1)}}>
        Increment
      </button>
      <button onClick={()=>{counterCont.setCount(counterCont.count - 1)}}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
