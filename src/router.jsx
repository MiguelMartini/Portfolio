import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SenacFood from "./pages/SenacFood.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/senac",
    element: <SenacFood />,
  },
]);

export default router;
