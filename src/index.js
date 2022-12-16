import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Contacto from "./paginas/Contacto";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "/contacto",
    element: (
      <div>
        <Header />
        <Contacto />
      </div>
    ),
  },
  {
    path: "/empresa",
    element: <div>Empresa</div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
