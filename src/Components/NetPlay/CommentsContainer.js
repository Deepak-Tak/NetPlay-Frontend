import { FaRegCircleUser } from "react-icons/fa6";
import Comment from "./Comment";
import { MdOutlineSort } from "react-icons/md";
import { useFetchCommentsQuery } from "../../store/bodySlice";

const CommentsContainer = ({ commentsCount, id }) => {
  const { data, isFetching } = useFetchCommentsQuery(id)

  if (isFetching)
    return <div></div>
  return (
    <div className="flex flex-col">
      <div className="my-6">
        <div className="flex mb-6">
          <p className="text-2xl pr-6 font-semibold">
            {commentsCount} Comments
          </p>
          <div className="flex mr-2">
            <MdOutlineSort className="size-6 mr-3" />
            <p>Sort by</p>

          </div>
        </div>
        <div className="flex">
          <FaRegCircleUser className="size-10 mr-3" />
          <input className="border-0 w-full border-b-[1px]" placeholder="Add a Comment..."></input>
        </div>
      </div>
      <div>
        {data.items.map((item) => <Comment key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default CommentsContainer;
