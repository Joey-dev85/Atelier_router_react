import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/home";
import About from "./pages/about";
import Article from "./pages/article";

// ...

const getWeatherOfTheDay = () => {
  return "sunny";
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      return getWeatherOfTheDay();
    },
    id: "app",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
