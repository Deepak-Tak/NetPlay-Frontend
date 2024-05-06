import { useEffect } from "react";
import { useState } from "react";
import { SEARCHDATA_API } from "./utils/constants";
import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";

const SearchResultContainer = () => {
  const [searchResultData, setSearchResultData] = useState(null);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("search_query");
  useEffect(() => {
    const fetchSearchResultData = async () => {
      const fetchData = await fetch(SEARCHDATA_API + keyword);
      const json = await fetchData.json();
      setSearchResultData(json.items);
    };
    fetchSearchResultData();
  }, [keyword]);
  if (!searchResultData) return <div>Loading</div>;
  return (
    <div className="flex flex-wrap">
      {searchResultData.map((item) => (
        <SearchResult data={item} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
