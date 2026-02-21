import { useEffect, useState } from "react";

export const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsMdUp(media.matches);

    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isMdUp;
};