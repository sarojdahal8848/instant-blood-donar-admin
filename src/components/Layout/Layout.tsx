import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import "./layout.scss";

const Layout = ({ component }: any) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="nav-container">
        <Navbar />
        {component}
      </div>
    </div>
  );
};

export { Layout };
