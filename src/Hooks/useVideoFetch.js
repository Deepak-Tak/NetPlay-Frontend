import { useFetchSearchVideoListQuery, useFetchVideoListQuery } from "../store/bodySlice";


export const useVideoFetch = (activeCategory) => {
    const { data: videoListData, isLoading: videoListLoading, isFetching: videoListFetching, isError: error1 } = useFetchVideoListQuery(48);
    const { data: searchVideoListData, isLoading: SearchVideoListLoading, isFetching: SearchVideoListFetching, isError: error2 } = useFetchSearchVideoListQuery(
        activeCategory
    );

    const data = activeCategory === "All" ? videoListData : searchVideoListData;
    const isLoading = activeCategory === "All" ? videoListLoading : SearchVideoListLoading
    const isFetching = activeCategory === "All" ? videoListFetching : SearchVideoListFetching
    const isError = activeCategory === "All" ? error1 : error2

    return { data, isLoading, isFetching, isError }

}