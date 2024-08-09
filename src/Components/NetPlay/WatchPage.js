
import { useEffect, useState } from "react";
import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";
import { useVideoFetch } from "../../Hooks/useVideoFetch";


const WatchPage = () => {
  const [switchRightPanel, setSwitchRightPanel] = useState((window.screen.width < 1150) ? true : false)

  const data = useVideoFetch("All")
  useEffect(() => {
    window.addEventListener('resize', function () {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1150) {
        setSwitchRightPanel(true)
      } else {
        setSwitchRightPanel(false)
      }
    });
    return () => window.removeEventListener('resize', () => { })
  })
  return (
    <div className=" pt-4 box-border h-screen overflow-y-scroll border-t-[64px] min-w-0 grow mx-4 flex">
      <LeftSidePanel data2={data} switchRightPanel={switchRightPanel} />

      {switchRightPanel ? null : <RightSidePanel data2={data} switchRightPanel={switchRightPanel} />}

    </div>
  );
};
export default WatchPage;
