import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import { useFetchSearchVideoListQuery } from "../../store/bodySlice";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const { data } = useFetchSearchVideoListQuery(
    searchParams.get("search_query")
  );
  if (!data) return <div>Loading</div>;
  return (
    <div className=" pt-4 box-border h-screen overflow-y-scroll border-t-[64px] min-w-0 grow ml-4">
      {data.items.map((item) => (
        <SearchResult key={item.id.videoId} data={item} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
