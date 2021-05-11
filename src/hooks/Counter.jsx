import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has cliked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
