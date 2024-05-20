const DATA_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";
export const KEY = "AIzaSyBF6yNLh6tv-lK6SZEjdLYI9igOuKkA_Lo";
export const AUTOSUGGESION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCHDATA_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${KEY}&q=`;
export const VIDEO_LIST_API = DATA_API + KEY;
export const VIDEO_LIST_BY_IDS = `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&part=snippet&id=`;

export const BACKGROUND_VIDEO = "2w_K3CB8PuE";

export const TMDB_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzBlZGVkZjgwOTk0MTY1MjU4Y2FlMDc5YWE0OTVmNSIsInN1YiI6IjY2NDhhODlmODU1YmVhOTBmMjFkNDk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUuE2rHgdA1A6NGDdSSrwZY8wScbgxrf3SJ9_krU1iA`;
export const CDN_LINK = `http://image.tmdb.org/t/p/w500/`;
