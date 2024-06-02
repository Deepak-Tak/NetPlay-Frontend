import { useEffect, useState } from "react";
import { useFetchVideoListQuery } from "../store/bodySlice";

const useInfiniteScroll = () => {
  const [number, setNumber] = useState(9);
  const { data } = useFetchVideoListQuery(48);
  const handleScroll = (e) =>
    document.documentElement.scrollHeight - document.documentElement.scrollTop <
    document.documentElement.clientHeight + 20
      ? setNumber((state) => state + 9)
      : null;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { number, data };
};

export default useInfiniteScroll;
