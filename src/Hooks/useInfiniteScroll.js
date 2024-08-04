import { useEffect, useState } from "react";
import { useFetchVideoListQuery } from "../store/bodySlice";

const useInfiniteScroll = ({ scrollref }) => {
  const [number, setNumber] = useState(9);
  const { data } = useFetchVideoListQuery(48);
  const handleScroll = (e) =>
    scrollref.current.scrollHeight - scrollref.current.scrollTop <
      scrollref.current.clientHeight + 40
      ? setNumber((state) => state + 9)
      : null;

  useEffect(() => {
    if (scrollref) {
      scrollref.current.addEventListener("scroll", handleScroll);

      return () => scrollref.current.removeEventListener("scroll", handleScroll);
    }

  }, []);
  return { number, data };
};

export default useInfiniteScroll;
