import { Layout, ProtectedRoute } from "./components";
import { HomePage, ListBlogPage, LoginPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./utils";

function App() {
  const userId = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            !userId ? (
              <LoginPage />
            ) : (
              <ProtectedRoute>
                <Layout component={<HomePage />} />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout component={<HomePage />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Layout component={<ListBlogPage />} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
