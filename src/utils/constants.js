const DATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";
const KEY = "AIzaSyBF6yNLh6tv-lK6SZEjdLYI9igOuKkA_Lo";
export const AUTOSUGGESION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCHDATA_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${KEY}&q=`;
export const VIDEO_LIST_API = DATA_API + KEY;
