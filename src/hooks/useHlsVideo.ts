import { useEffect, type RefObject } from "react";
import Hls from "hls.js";
import { HERO_HLS_URL } from "../constants/media";

export function useHlsVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  url: string = HERO_HLS_URL
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      return () => hls.destroy();
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }, [videoRef, url]);
}
