import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SenacFood from "./pages/SenacFood.jsx";
import MicroSys from "./pages/MicroSys.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/senac",
    element: <SenacFood />,
  },
  {
    path: "/microsys",
    element: <MicroSys/>,
  }
]);

export default router;
