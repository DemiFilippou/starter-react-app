import React from "react";

export const CounterComponent = ({ count, incrementCounter }) => {
  return (
    <div>
      <h2>Counter Component Using Container</h2>
      <span>{count}</span>
      <button onClick={() => incrementCounter()}>Increment counter</button>
    </div>
  );
};
