import Button from "../Button/Button";

const Notespace = () => {
  return (
    <div className="flex flex-col border border-slate-300 my-5 p-2 rounded-lg">
      <input
        type="text"
        placeholder="Enter your note title here :)"
        className="p-5 outline-none"
      ></input>
      <textarea className="w-160 h-80 p-2 text-gray-700 border border-gray-300 outline-sky-400 rounded-md resize-none enabled:hover:border-blue-400 disabled:opacity-75 relative mb-3"></textarea>
      <span className="flex justify-end">
        <Button purpose={"Save Me"} />
      </span>
    </div>
  );
};

export default Notespace;
