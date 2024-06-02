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
    <div className="top-[68px] relative flex flex-wrap justify-around">
      {data.items.map((item) => (
        <SearchResult key={item.id.videoId} data={item} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
