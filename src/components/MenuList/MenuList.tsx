import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsIcon from "@mui/icons-material/Settings";

export const menuList = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    title: "Donar",
    icon: PersonIcon,
    path: "/donor",
  },
  {
    title: "Donation",
    icon: VolunteerActivismIcon,
    path: "/donation",
  },
  {
    title: "Event",
    icon: EventIcon,
    path: "/event",
  },
  {
    title: "Blog",
    icon: RssFeedIcon,
    path: "/blog",
  },
  {
    title: "Gallery",
    icon: CollectionsIcon,
    path: "/gallery",
  },
  {
    title: "Setting",
    icon: SettingsIcon,
    path: "/setting",
  },
];
