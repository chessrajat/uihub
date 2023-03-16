import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Browse from "./Components/Browse/Browse";
import Home from "./Components/Home/Home";
import RootLayout from "./Layouts/RootLayout";
import Button1 from "./UIElements/Buttons/Button1";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse title="Browse UI Components" />} />

      {/* Elements */}
      <Route path="/browse/buttons" element={<Outlet />}>
        <Route index element={<Browse title="Buttons UI" />} />
        <Route path="button1" element={<Button1 />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
