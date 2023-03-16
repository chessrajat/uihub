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
import ShowCodeContainer from "./Components/Browse/ShowCodeContainer";
import Home from "./Components/Home/Home";
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse title="Browse UI Components" />} />

      {/* Elements */}
      <Route path="/browse/buttons" element={<Outlet />}>
        <Route index element={<Browse title="Buttons UI" />} />
        <Route
          path="button1"
          element={
            <ShowCodeContainer
              classes="flex justify-center items-center"
              element="Buttons/Button1"
              codeString="/code/buttons/button1.txt"
            />
          }
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
