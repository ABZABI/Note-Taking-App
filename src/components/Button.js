const Button = ({ purpose }) => {
  return (
    <button
      onClick={purpose.clicked}
      className="mr-2 p-2 border border-gray-400 rounded-lg w-fit text-md text-white"
    >
      {purpose.text}
    </button>
  );
};

export default Button;
