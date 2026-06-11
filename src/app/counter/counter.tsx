//Client side functionality is separated from metadata to allow metadata to work


"use client";

import { useState } from "react";

//Counter feature
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};