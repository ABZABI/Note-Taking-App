import Button from "./Button";
const Header = ({ header }) => {
  return (
    <div>
      {header.map((head, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-between md:px-8 md:py-3 items-center "
          >
            <h1 className="font-semibold text-lg text-center text-white">
              {head.title}
            </h1>
            <div className="hidden sm:block">
              <Button purpose={head.create} />
              <Button purpose={head.export} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
