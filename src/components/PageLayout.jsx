import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function PageLayout() {
  return (
    <div className="d-flex" style={{ width: "100vw" }}>
      <Navbar />
      <div style={{ flex: "70%" }}>
        <Outlet />
      </div>
    </div>
  );
}
export default PageLayout;
