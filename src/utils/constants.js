const DATA_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";
export const KEY = process.env.REACT_APP_YOUTUBE_KEY;
export const AUTOSUGGESION_API =
  "https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCHDATA_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${KEY}&q=`;
export const VIDEO_LIST_API = DATA_API + KEY;
export const VIDEO_LIST_BY_IDS = `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&part=snippet&id=`;

export const BACKGROUND_VIDEO = "2w_K3CB8PuE";

export const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
export const CDN_LINK = `http://image.tmdb.org/t/p/w500/`;
export const GEMINIAI_KEY = process.env.REACT_APP_GEMINIAI_KEY;
