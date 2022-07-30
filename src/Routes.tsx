import { Layout, ProtectedRoute } from "./components";
import { CreateBlogPage, HomePage, ListBlogPage, LoginPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./utils";

const MainRoutes = () => {
  const userId = useAuth();
  return (
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
      <Route
        path="/blog/create"
        element={
          <ProtectedRoute>
            <Layout component={<CreateBlogPage />} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
