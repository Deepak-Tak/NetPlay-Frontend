import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import { useFetchSearchVideoListQuery } from "../utils/bodySlice";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const { data } = useFetchSearchVideoListQuery(
    searchParams.get("search_query")
  );

  if (!data) return <div>Loading</div>;
  return (
    <div className="flex flex-wrap justify-around">
      {data.items.map((item) => (
        <SearchResult data={item} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
