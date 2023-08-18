import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Notespace from "./Components/Notespace/Notespace";

function App() {
  const [showSpace, setSpace] = useState(false);

  //this conditionally shows the notespace area when the add note is clicked
  let notespace = null;
  const showNotespaceHandler = () => {
    setSpace(true);
  };

  return (
    <div className="flex flex-col items-center max-w-screen h-screen p-7">
      <h1 className="font-medium text-2xl mb-2">Note Taking App</h1>
      <Button
        purpose={"Add Note"}
        id={"add-note"}
        clicked={() => showNotespaceHandler()}
      />
      {showSpace && <Notespace />}
    </div>
  );
}

export default App;
