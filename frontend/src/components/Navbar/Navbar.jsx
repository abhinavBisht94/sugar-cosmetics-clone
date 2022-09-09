import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiOutlineMenu,
  AiOutlineHome,
} from "react-icons/ai";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle, MdLocalOffer } from "react-icons/md";
import { BiCart, BiCategory, BiSearch } from "react-icons/bi";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SubNavbar from "./SubNavbar";
import LoginPage from "../Login/Login/LoginPage";
import { UserContext } from "../../context/UserContext";
// import Search from "./Search";

const mobileTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#000000",
    },
  },
});

const Navbar = () => {
  const [close, setClose] = useState(false);
  const { singleUser, isLoggedIn, cartCount } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("User"));
  console.log("user: ", user);
  console.log("cartCount: ", cartCount);
  console.log("singleUser: ", singleUser);
  // const [navClose, setCSetNav] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);

  const onClose = () => setClose(!close);
  const navigate = useNavigate();

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
        <div
          className={`navbar__offer-panel-close ${
            close ? "navbar__offer-panel-close" : ""
          }`}
        >
          <p>FREE Mate Attack Transfer proof Lipstick on a spend of Rs.799</p>
          <AiOutlineClose onClick={onClose} className="close-icon" />
        </div>

        <nav className="app__navbar">
          <div className="navbar__logo">
            <Link className="link" to={"/"}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif"
                alt="brand logo"
              />
            </Link>
          </div>
          <div className="navbar__search-panel">
            <input type="text" placeholder='Try "Liquid Lipstick"' />
            <button>Search</button>
          </div>
          <div className="navbar__account">
            <div className="navbar__user">
              <FaUser />
              <Link to={!isLoggedIn ? "/login" : "/account"} className="link">
                <p>
                  {!user ? "Login/Register" : `${user.fName} ${user.lName}`}
                </p>
              </Link>
              {/* <Drawer
                // onClick={() => {
                //   navigate("/login");
                // }}
                open={loginDrawer}
                anchor="right"
                onClose={() => setLoginDrawer(false)}
              >
                <LoginPage setLoginDrawer />
              </Drawer> */}
            </div>
            <div className="navbar__dropdown">
              <AiFillCaretDown />
            </div>
          </div>
          <div className="navbar__icons">
            <Link className="link" to={"#"}>
              <FaHeart />
            </Link>
            <div className="navbar__cart">
              <Link className="link" to={"/cart"}>
                <FaShoppingCart />
              </Link>
              {/* <p>{cartCount}</p> */}
            </div>
            <Link className="link" to={"#"}>
              <MdLocalOffer />
            </Link>
          </div>
        </nav>

        <SubNavbar />
      </div>

      {/* Mobile View */}

      <ThemeProvider theme={mobileTheme}>
        <Box sx={{ flexGrow: 1 }} className="mobile__navbar">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setIsDrawerOpen(true)}
                sx={{ mr: 2 }}
              >
                <AiOutlineMenu />
              </IconButton>

              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box
                  p={2}
                  width={"350px"}
                  textAlign="center"
                  role="presentation"
                >
                  <Typography varient="h6" component={"div"}>
                    Hello!
                  </Typography>
                </Box>
              </Drawer>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link className="link" to={"#"}>
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/pride-logo-option-white.gif"
                    alt="brand logo"
                    height={"40px"}
                  />
                </Link>
              </Typography>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <Link className="link" to={"#"}>
                  <FaHeart />
                </Link>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <Link className="link" to={"#"}>
                  <MdLocalOffer />
                </Link>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <div
          className="mobile__search"
          // onClick={() => navigate("/search")}
        >
          <div>Search for products...</div>
          <BiSearch className="search__icon" />
        </div>

        {/* Mobile view Bottom navbar */}

        <Box className="mobile__navbar">
          <AppBar
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <Link className="link" to={"/"}>
                  <AiOutlineHome />
                </Link>
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <Link className="link" to={"category"}>
                  <BiCategory />
                </Link>
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <Link className="link" to={"cart"}>
                  <BiCart />
                </Link>
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <Link className="link" to={"profile"}>
                  <MdAccountCircle />
                </Link>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
