<<<<<<< HEAD
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

const App = () => {
  const notes = [
    {
      id: 1,
      title: "Testing",
      content: "lorem ipsum shit it's not working.At our core, ",
      dateCreated: "01 Nov",
      timeCreated: "07:46",
    },
    {
      id: 2,
      title: "Testing",
      content: "lorem ipsum shit it's not working",
      dateCreated: "",
      timeCreated: "",
    },
    {
      id: 3,
      title: "Testing",
      content: "lorem ipsum shit it's not working",
      dateCreated: "",
      timeCreated: "",
    },
    {
      id: 4,
      title: "Testing",
      content: "lorem ipsum shit it's not working",
      dateCreated: "",
      timeCreated: "",
    },
    {
      id: 5,
      title: "Testing",
      content: "lorem ipsum shit it's not working",
      dateCreated: "",
      timeCreated: "",
    },
    {
      id: 6,
      title: "Testing",
      content: "lorem ipsum shit it's not working",
      dateCreated: "",
      timeCreated: "",
    },
  ];

  const header = [
    {
      title: "Note Taking App",
      create: {
        text: "New Note",
        clicked: console.log("man"),
      },
      export: {
        text: "Export Notes",
        clicked: console.log("man"),
      },
    },
  ];

  return (
    <div className="w-full h-full lg:h-screen md:h-screen bg-black">
      <Header header={header} />
      <Note content={notes} />
      <Footer />
    </div>
  );
};
=======
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
>>>>>>> origin/main

export default App;
