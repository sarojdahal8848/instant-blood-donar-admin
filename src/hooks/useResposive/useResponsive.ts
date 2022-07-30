import { useEffect, useMemo, useState } from "react";
import { determineSize } from "../../utils/determineSize";

const useResponsive = () => {
  const [displaySize, setDisplaySize] = useState(
    determineSize(window.innerWidth)
  );

  useEffect(() => {
    const handleSize = () => setDisplaySize(determineSize(window.innerWidth));
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return useMemo(() => displaySize, [displaySize]);
};

export { useResponsive };
