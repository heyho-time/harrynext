import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>counter {counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}>Plus</button>
    </div>
  );
}
