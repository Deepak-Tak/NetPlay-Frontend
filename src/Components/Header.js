import HeaderRight from "./HeaderRight";
import { useSelector } from "react-redux";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  const displaySidebar = useSelector((store) => store.sidebar[0]);

  return (
    <header
      className={`flex flex-row justify-between fixed w-full top-0 ${
        displaySidebar
          ? "bg-white"
          : "bg-transparent bg-gradient-to-b from-black"
      }  z-50  p-4 items-center shadow-md`}
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

export default Header;
