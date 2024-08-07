import { useFetchSearchVideoListQuery, useFetchVideoListQuery } from "../store/bodySlice";


export const useVideoFetch = (activeCategory) => {
    const { data: videoListData, isLoading: videoListLoading, isFetching: videoListFetching } = useFetchVideoListQuery(48);
    const { data: searchVideoListData, isLoading: SearchVideoListLoading, isFetching: SearchVideoListFetching } = useFetchSearchVideoListQuery(
        activeCategory
    );

    const data = activeCategory === "All" ? videoListData : searchVideoListData;
    const isLoading = activeCategory === "All" ? videoListLoading : SearchVideoListLoading
    const isFetching = activeCategory === "All" ? videoListFetching : SearchVideoListFetching
    return { data, isLoading, isFetching }

}