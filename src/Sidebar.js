import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex w-60 shrink-0 flex-col ">
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <div>Shorts</div>
      <div>Subscription</div>
      <div>Explore</div>
    </div>
  );
};

export default Sidebar;
