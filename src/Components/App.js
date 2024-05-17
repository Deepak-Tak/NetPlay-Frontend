import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../index.css";
import Body from "./Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import { Provider } from "react-redux";
import appStore from "../utils/store";
import SearchResultContainer from "./SearchResultContainer";
import Playlist from "./Playlist";

const App = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const switchSidebar = () => setSidebarDisplay(!sidebarDisplay);
  return (
    <>
      <Provider store={appStore}>
        <Header switchSidebar={switchSidebar} />
        <div className="flex">
          <Sidebar sidebarDisplay={sidebarDisplay} />
          <Outlet />
        </div>
      </Provider>
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
    ],
  },
]);
export default AppRouter;
