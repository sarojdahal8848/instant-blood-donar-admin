import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./customTheme";
import MainRoutes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
