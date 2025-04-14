"use client";
import {
  DetailedHTMLProps,
  useRef,
  useState,
  VideoHTMLAttributes,
} from "react";

const VideoWithOverlay = (
  props: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [showContorls, setShowContols] = useState(false);

  const handlePlay = () => {
    setShowOverlay(false);
    setShowContols(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative rounded-[20px] overflow-hidden">
      <video ref={videoRef} {...props} controls={showContorls}/>
      {showOverlay && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl"
        >
          <div className="rounded-full p-6 bg-black/75 flex items-center justify-center w-20 h-20">
            ▶
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoWithOverlay;
