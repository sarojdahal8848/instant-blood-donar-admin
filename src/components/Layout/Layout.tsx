import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CustomDrawer from "../CustomDrawer/CustomDrawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export function Layout({ component }: any) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(227, 225, 238)" }}
      >
        <DrawerHeader />
        {component}
      </Box>
    </Box>
  );
}

// import { Navbar } from "../Navbar";
// import { Sidebar } from "../Sidebar";
// import "./layout.scss";

// const Layout = ({ component }: any) => {
//   return (
//     <div className="layout">
//       <div className="layout__sidebar">
//         <Sidebar />
//       </div>
//       <div className="layout__main">
//         <Navbar />
//         {component}
//       </div>
//     </div>
//   );
// };

// export { Layout };

// import EmailIcon from "@mui/icons-material/Email";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu";
// import "./navbar.scss";
// import { useResponsive } from "../../hooks/useResposive";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <MenuIcon />
//       <div className="navbar__logoContainer">
//         <img src="logo.jpg" alt="logo" />
//         <h3>Instant Blood Donar</h3>
//       </div>
//       <div className="navbar__icons">
//         <div className="icon-container">
//           <EmailIcon className="icon" />
//           <span>2</span>
//         </div>
//         <div className="icon-container">
//           <NotificationsIcon className="icon" />
//           <span>1</span>
//         </div>
//         <div className="icon-container">
//           <PersonIcon className="icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Navbar };
