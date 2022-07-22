import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <img src="logo.jpg" alt="logo" />
        <h3>Instant Blood Donar</h3>
      </div>
      <div className="navbar__icons">
        <div className="icon-container">
          <EmailIcon className="icon" />
          <span>2</span>
        </div>
        <div className="icon-container">
          <NotificationsIcon className="icon" />
          <span>1</span>
        </div>
        <div className="icon-container">
          <PersonIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
