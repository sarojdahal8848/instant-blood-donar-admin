import { DisplaySize } from "./screensize";

const determineSize = (width: number) => {
  if (width <= DisplaySize.xs) {
    return DisplaySize.xs;
  } else if (width > DisplaySize.xs && width <= DisplaySize.sm) {
    return DisplaySize.sm;
  } else if (width > DisplaySize.sm && width <= DisplaySize.md) {
    return DisplaySize.md;
  } else if (width > DisplaySize.md && width <= DisplaySize.lg) {
    return DisplaySize.lg;
  } else {
    return DisplaySize.xl;
  }
};

export { determineSize };
