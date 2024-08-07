import Header from "./NetPlay/Header";
import Sidebar from "./NetPlay/Sidebar";
import "../index.css";
import Body from "./NetPlay/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./NetPlay/WatchPage";
import { useSelector } from "react-redux";
import SearchResultContainer from "./NetPlay/SearchResultContainer";
import Playlist from "./NetPlay/Playlist";
import Theater from "./Theater/Theater";

const App = () => {
  const sidebarDisplay = useSelector((store) => store.sidebar[0]);
  return (
    <div >
      <Header />
      <div className="flex">
        {sidebarDisplay ? <Sidebar /> : null}
        <Outlet />
      </div>
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "watch", element: <WatchPage /> },
      { path: "results", element: <SearchResultContainer /> },
      { path: "playlist", element: <Playlist /> },
      { path: "browse/:Id", element: <Theater /> },
    ],
  },
]);
export default AppRouter;
