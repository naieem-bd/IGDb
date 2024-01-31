import { createBrowserRouter } from "react-router-dom";
import Layout from "./screens/Layout";
import HomePage from "./screens/HomePage";
import GameDetailPage from "./screens/GameDetailPage";
import ErrorPage from "./screens/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
