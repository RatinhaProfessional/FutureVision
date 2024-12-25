import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Hero from "./components/hero";
import ContentTable from "./components/contentTable";
import NewIn from "./components/newIn";
import FrameLab from "./components/FrameLab";
import OurVision from "./components/OurVision";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <ContentTable />
            <NewIn />
            <FrameLab />
            <OurVision />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);