const Header = ({ switchSidebar }) => {
  return (
    <header className="flex flex-row justify-between p-4 items-center shadow-md">
      <div className=" flex justify-between items-center">
        <img
          className="w-[26px] h-[18px] mr-4"
          alt="menuicon"
          src="/menulogo.png"
          onClick={switchSidebar}
        />
        <img className="w-[90px] h-[20px]" alt="logo" src="/youtubelogo.png" />
      </div>

      <div>
        <input className="border-[#c6c6c6] border-[1.3px]"></input>
        <button>
          <img className="w-[18px] " alt="searchbutton" src="/searchicon.png" />
        </button>
      </div>
      <div className="w-8">
        <img alt="userlogo" src="/userlogo.png"></img>
      </div>
    </header>
  );
};

export default Header;
