import { SvgIconProps } from "@mui/material";

interface CustomIconProp {
  Icons: React.ComponentType<SvgIconProps>;
}
const CustomIcon = ({ Icons }: CustomIconProp) => {
  return <Icons />;
};

export { CustomIcon };
