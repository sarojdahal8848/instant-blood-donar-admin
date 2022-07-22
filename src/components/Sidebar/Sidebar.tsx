import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsIcon from "@mui/icons-material/Settings";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar__nav">
        <ul>
          <li>
            <span>
              <DashboardIcon className="icon" />
            </span>
            Dashboard
          </li>
          <li>
            <span>
              <PersonIcon className="icon" />
            </span>
            Donar
          </li>
          <li>
            <span>
              <VolunteerActivismIcon className="icon" />
            </span>
            Donation
          </li>
          <li>
            <span>
              <EventIcon className="icon" />
            </span>
            Event
          </li>
          <li>
            <span>
              <RssFeedIcon className="icon" />
            </span>
            Blog
          </li>
          <li>
            <span>
              <CollectionsIcon className="icon" />
            </span>
            Gallery
          </li>
          <li>
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
