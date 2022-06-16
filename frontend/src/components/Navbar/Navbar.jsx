import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const navigate = useNavigate();

  return (
    <>
      <div className="navbar__offer-panel">
        <p>FREE Mate Attack Transfer proof Lipstick on a spend of Rs.799</p>
        <AiOutlineClose className="close-icon" />
      </div>

      <nav className="app__navbar">
        <div className="navbar__logo">
          <img
            src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif"
            alt="brand logo"
          />
        </div>
        <div className="navbar__search-panel">
          <input type="text" placeholder='Try "Liquid Lipstick"' />
          <button>Search</button>
        </div>
        <div className="navbar__account">
          <div className="navbar__user">
            <FaUser />
            <p>Hi, Akshay Patil</p>
          </div>
          <div className="navbar__dropdown">
            <AiFillCaretDown />
          </div>
        </div>
        <div className="navbar__icons">
          <FaHeart />
          <div className="navbar__cart">
            <FaShoppingCart />
            <p>0</p>
          </div>
          <MdLocalOffer />
        </div>
      </nav>

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
                <img
                  src="https://in.sugarcosmetics.com/desc-images/pride-logo-option-white.gif"
                  alt="brand logo"
                  height={"40px"}
                />
              </Typography>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <FaHeart />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MdLocalOffer />
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
                <AiOutlineHome />
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <BiCategory />
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <BiCart />
              </IconButton>
              <IconButton sx={{ flexGrow: 1 }} color="inherit">
                <MdAccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
