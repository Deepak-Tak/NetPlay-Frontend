import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";

const App = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(false);
  const switchSidebar = () => setSidebarDisplay(!sidebarDisplay);
  return (
    <>
      <Header switchSidebar={switchSidebar} />
      {sidebarDisplay ? <Sidebar /> : null}
    </>
  );
};
export default App;
