import { useEffect, useState } from "react";
import { useVideoFetch } from "./useVideoFetch";

const useInfiniteScroll = (scrollref, activeCategory) => {
  const [number, setNumber] = useState(9);
  const { data, isLoading, isFetching } = useVideoFetch(activeCategory)



  const handleScroll = (e) => {
    return (e.target.scrollHeight - e.target.scrollTop) < e.target.clientHeight + 20
      ? setNumber((state) => state + 9)
      : null;

  }


  useEffect(() => {
    if (scrollref) {
      const element = scrollref.current
      element.addEventListener("scroll", handleScroll);

      return () => element.removeEventListener("scroll", handleScroll);
    }

  }, []);
  return { number, data, isLoading, isFetching };
};

export default useInfiniteScroll;
