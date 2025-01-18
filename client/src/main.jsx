import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Hero from "./components/hero";
import ContentTable from "./components/contentTable";
import NewIn from "./components/newIn";
import FrameLab from "./components/FrameLab";
import OurVision from "./components/OurVision";
import ContentTableTwo from "./components/contentTable2";
import Products from "./components/products";
import ProductsIntro from "./components/productsIntro";
import Register from "./components/register";
import LogIn from "./components/logIn";
import Account from "./components/account";

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
      {
        path: "products",
        element: (
          <>
            <ProductsIntro />
            <ContentTableTwo />
            <NewIn />
            <Products />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <>
          <LogIn/>
          </>
        ),
      },
      {
        path: "register",
        element: (
          <>
            <Register />
          </>
        ),
      },
      {
        path: "account",
        element: (
          <>
            <Account />
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
