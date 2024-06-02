import React from "react";
import { BACKGROUND_VIDEO } from "../../utils/constants";

const Background = () => {
  return (
    <iframe
      className="absolute top-0 w-full aspect-video -z-50"
      src={`https://www.youtube.com/embed/${BACKGROUND_VIDEO}?playlist=${BACKGROUND_VIDEO}&loop=1&autoplay=1&mute=1&controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default Background;
