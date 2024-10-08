import { createBrowserRouter } from "react-router-dom";

import App from "../components/App";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Navbar",
    element: <Navbar setActivePage={() => { }} />,
  },
]);

export default router;
