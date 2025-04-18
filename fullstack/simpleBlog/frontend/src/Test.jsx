import React, { useState, useMemo } from "react";
export default function Test() {
  const slowFunc = (number) => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  };
  const [number, setNumber] = useState(0);
  const [bg, setBg] = useState(false);
  const memoizedValue = useMemo(() => slowFunc(number), [number]);
  return (
    <div
      dir="ltr"
      style={{
        padding: "10px",
        fontSize: "24px",
        background: bg ? "lightBlue" : "red",
      }}
    >
      <h1>{memoizedValue}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value || 0)}
      />
      <button onClick={() => setBg(!bg)}>Change Background</button>
    </div>
  );
}
