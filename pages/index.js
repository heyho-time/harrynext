import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div style={{ height: 100 }} />

      <span>counter {counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}>Plus</button>
    </div>
  );
}
