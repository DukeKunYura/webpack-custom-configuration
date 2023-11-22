import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/App";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import TestForm from "./pages/testForm/TestForm";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/testform",
        element: <TestForm />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
