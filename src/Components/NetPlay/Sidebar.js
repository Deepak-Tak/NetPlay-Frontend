import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toogle = useSelector((store) => store.sidebar[1]);
  return (
    <div className="flex z-[1] shrink-0 w-auto max-[500px]:fixed max-[500px]:overflow-x-scroll max-[500px]:w-full max-[500px]:bottom-0   max-[500px]:border-t max-[500px]:border-b bg-white max-[500px]:mt-0 max-[500px]:shadow-md max-[500px]:ml-0  mt-1 ml-1 align-middle  flex-col  ">
      <div className="sticky  top-[68px]  max-[500px]:flex-row max-[500px]:flex max-[500px]:justify-around">
        <Link className="max-[500px]:shrink-0 hover:bg-[#f0f0f0]" to={"/"}>
          <div className="flex p-3  justify-start hover:bg-[#f0f0f0] rounded-md">
            <img
              className="size-[23.99px] max-[500px]:size-4 "
              alt="homelogo"
              src="/homelogo.svg"
            />
            {toogle ? (
              <div className="text-md max-[500px]:text-sm ml-3 ">Home</div>
            ) : null}
          </div>
        </Link>
        <div className="flex p-3  max-[500px]:shrink-0 hover:bg-[#f0f0f0] justify-start rounded-md">
          <img
            className="size-[23.99px] max-[500px]:size-4"
            alt="shorts"
            src="/shorts.svg"
          />
          {toogle ? (
            <div className="text-md max-[500px]:text-sm ml-3 ">Shorts</div>
          ) : null}
        </div>
        <div className="flex p-3  max-[500px]:shrink-0 hover:bg-[#f0f0f0] justify-start rounded-md">
          <img
            className="size-[23.99px] max-[500px]:size-4"
            alt="subscription"
            src="/subscription.svg"
          />
          {toogle ? (
            <div className="text-md max-[500px]:text-sm ml-3">Subscription</div>
          ) : null}
        </div>
        <div className="flex p-3  max-[500px]:shrink-0 hover:bg-[#f0f0f0] justify-start rounded-md">
          <img
            className="size-[23.99px] max-[500px]:size-4"
            alt="explore"
            src="/explore.svg"
          />
          {toogle ? (
            <div className="text-md max-[500px]:text-sm ml-3 ">Explore</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
