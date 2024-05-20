import Header from "./Header";
import Sidebar from "./Sidebar";
import "../index.css";
import Body from "./Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";
import SearchResultContainer from "./SearchResultContainer";
import Playlist from "./Playlist";
import Theater from "./Theater/Theater";

const App = () => {
  const sidebarDisplay = useSelector((store) => store.sidebar[0]);
  return (
    <>
      <Header />
      <div className="flex">
        {sidebarDisplay ? <Sidebar /> : null}
        <Outlet />
      </div>
    </>
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
      { path: "browse", element: <Theater /> },
    ],
  },
]);
export default AppRouter;
