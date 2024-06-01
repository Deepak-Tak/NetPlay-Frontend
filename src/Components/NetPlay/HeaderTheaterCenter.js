import { useNavigate, useParams } from "react-router-dom";

const HeaderTheaterCenter = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex">
      <img
        className={`size-6 ${
          Id === "0" ? "opacity-100" : "opacity-65"
        } hover:opacity-100`}
        alt="logo"
        src="/theaterhomelogo.svg"
        onClick={() => navigate("/browse/0")}
      ></img>
      <h3
        className={`text-white max-md:text-sm ml-3 font-semibold ${
          Id === "0" ? "opacity-65" : "opacity-100"
        } hover:opacity-100 hover:cursor-pointer`}
        onClick={() => navigate("/browse/1")}
      >
        GPT-Search
      </h3>
    </div>
  );
};
export default HeaderTheaterCenter;
