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
      <Route path="/browse/:ComponentCategory" element={<Outlet />}>
        <Route index element={<Browse title="Browse UI Components" />} />
        <Route path=":ElementId" element={<ShowCodeContainer />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
