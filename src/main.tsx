import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

// page components

import Home from "./pages/home";
import About from "./pages/about";

// router creation

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <About />
        </main>
      </>
    ),
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
