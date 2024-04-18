import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";
import Body from "./Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import { Provider } from "react-redux";
import appStore from "./utils/store";

const App = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const switchSidebar = () => setSidebarDisplay(!sidebarDisplay);
  return (
    <>
      <Provider store={appStore}>
        <Header switchSidebar={switchSidebar} />
        <div className="flex">
          {sidebarDisplay ? <Sidebar /> : null}
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
    ],
  },
]);
export default AppRouter;
