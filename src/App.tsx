import { Outlet } from "react-router";
import { LayoutMain } from "./components/Layout/LayoutMain";

function App() {
  return (
    <>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </>
  );
}

export default App;
