import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsIcon from "@mui/icons-material/Settings";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar__nav">
        <ul>
          <li onClick={() => handleNavigation("/")}>
            <span>
              <DashboardIcon className="icon" />
            </span>
            Dashboard
          </li>
          <li onClick={() => handleNavigation("/donar")}>
            <span>
              <PersonIcon className="icon" />
            </span>
            Donar
          </li>
          <li onClick={() => handleNavigation("/donation")}>
            <span>
              <VolunteerActivismIcon className="icon" />
            </span>
            Donation
          </li>
          <li onClick={() => handleNavigation("/event")}>
            <span>
              <EventIcon className="icon" />
            </span>
            Event
          </li>
          <li onClick={() => handleNavigation("/blog")}>
            <span>
              <RssFeedIcon className="icon" />
            </span>
            Blog
          </li>
          <li onClick={() => handleNavigation("/gallery")}>
            <span>
              <CollectionsIcon className="icon" />
            </span>
            Gallery
          </li>
          <li onClick={() => handleNavigation("/setting")}>
            <span>
              <SettingsIcon className="icon" />
            </span>
            Setting
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Sidebar };
