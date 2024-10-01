import { NavBar } from "../UI/NavBar";

export const LayoutMain = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
