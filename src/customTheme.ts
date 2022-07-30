import { createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "black",
        },
      },
    },
  },
});

export default customTheme;
