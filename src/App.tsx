import { Layout } from "./components";
import { HomePage, LoginPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<Layout component={<HomePage />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
