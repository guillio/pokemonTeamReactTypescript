import { createBrowserRouter } from "react-router-dom";

//Components
import App from "../App";
import Home from "../pages/Home/Home";
import { Pokemon } from "../pages/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Pokemon/:id",
        element: <Pokemon />,
      },
    ],
  },
]);
