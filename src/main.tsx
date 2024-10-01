import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { PokemonsProvider } from "./context/PokemonsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonsProvider>
      <RouterProvider router={router} />
    </PokemonsProvider>
  </StrictMode>
);
