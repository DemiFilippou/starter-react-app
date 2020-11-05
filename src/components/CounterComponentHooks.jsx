import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const CounterComponentHooks = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter Component Using Hooks</h2>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
        Increment counter
      </button>
    </div>
  );
};
