import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";
import Body from "./Body";

const App = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(false);
  const switchSidebar = () => setSidebarDisplay(!sidebarDisplay);
  return (
    <>
      <Header switchSidebar={switchSidebar} />
      <div className="flex justify-between">
        {sidebarDisplay ? <Sidebar /> : null}
        <Body />
      </div>
    </>
  );
};
export default App;
