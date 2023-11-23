import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/App/App";
import TestForm from "./pages/testForm/TestForm";
import { Shop } from "./pages/shop";
import { Suspense } from "react";
import { About } from "./pages/about";

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
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/testform",
        element: <TestForm />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
