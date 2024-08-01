import { useState } from "react";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>This is heading</h2>
      <p>This is paragraph</p>
      <p className="danger">This is a danger class</p>
    </>
  );
}

export default App;
