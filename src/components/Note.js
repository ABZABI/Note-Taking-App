import { useState } from "react";

const Note = ({ content }) => {
  const [dateSaved, setDateSaved] = useState("");
  const [timeSaved, setTimeSaved] = useState("");

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  let optionsForDate = { month: "short", day: "2-digit" };
  let optionsForTime = { hour: "2-digit", minute: "2-digit", hour12: false };

  let formattedDate = new Date().toLocaleDateString(undefined, optionsForDate);
  let formattedTime = new Date().toLocaleTimeString(undefined, optionsForTime);

  // console.log(formattedDate);
  // console.log(formattedTime);

  // console.log(date);
  // console.log(time);
  const note = content.map((message) => {
    return (
      <div
        key={message.id}
        className="w- h-[200px] mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4"
      >
        <div>
          <h1 className="uppercase tracking-wide text-lg   text-indigo-500 font-semibold border-b-[1px] border-gray-300">
            {message.title}
          </h1>
          <div className="mt-4 text-sm text-gray-700 truncate">
            {message.dateCreated}
            <span className="mx-1 text-gray-400"> • </span>
            {message.timeCreated}
          </div>
        </div>
        <p className="mt-2 text-gray-500">{message.content}</p>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {note}
    </div>
  );
};

export default Note;

// <div>
//     {}
//   <h1>{title}</h1>
//   <p>{content}</p>
//   <div></div>
// </div>
