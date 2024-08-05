import { useEffect, useState } from "react";
import { useFetchVideoListQuery } from "../store/bodySlice";

const useInfiniteScroll = (scrollref) => {
  const [number, setNumber] = useState(9);
  const { data } = useFetchVideoListQuery(48);

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
  return { number, data };
};

export default useInfiniteScroll;
