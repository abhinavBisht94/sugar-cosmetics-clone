import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./subNavbar.css";

const SubNavbar = () => {
  const data = [
    {
      title: "makeup",
      cate: ["lips", "face", "eyes"],
    },
    {
      title: "brushes",
      cate: ["face", "eyes"],
    },
    {
      title: "skincare",
      cate: [
        "moisturizers",
        "sunscreen",
        "setting mists",
        "coffee culture range",
        "sheet mask combo",
        "masks",
      ],
    },
    {
      title: "trending",
      cate: [
        "sugar merch station",
        "makeup kits",
        "bestsellers",
        "sugar sets",
        "value sets",
      ],
    },
    {
      title: "blog",
      cate: ["featured", "makeup", "skincare"],
    },
    {
      title: "offers",
    },
    {
      title: "stores",
    },
  ];

  return (
    <div className="app__sub-navbar">
      <ul>
        {/* <li onClick={handleClick}>makeup</li>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            "aria-labelledby": "basic-button",
        }}
        >
        <MenuItem sx={{ width: "125px" }} onClick={handleClose}>
        LIPS
        </MenuItem>
        <MenuItem onClick={handleClose}>FACE</MenuItem>
        <MenuItem onClick={handleClose}>EYES</MenuItem>
    </Menu> */}
        {data.map((item) => {
          return (
            <li>
              <Box className="menu">
                <Link to={"#"} className="menu-link">
                  <span>{item.title}</span>
                  <Box className={`dropdown-menu`}>
                    {item.cate &&
                      item.cate.map((sub, index) => (
                        <Link to={"#"} className="dropdown-items">
                          {sub}
                        </Link>
                      ))}
                  </Box>
                </Link>
              </Box>
            </li>
          );
        })}

        {/* <li>
          <Box className="menu">
            <Link to={"#"} className="menu-link">
              makeup
              <Box className="dropdown-menu">
                <Link to={"#"} className="dropdown-items">
                  lips
                </Link>
                <Link to={"#"} className="dropdown-items">
                  face
                </Link>
                <Link to={"#"} className="dropdown-items">
                  eyes
                </Link>
              </Box>
            </Link>
          </Box>
        </li>

        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>

            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>
        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>
            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>
        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>
            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>
        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>
            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>
        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>
            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>
        <li>
          <Box className="main-menu">
            <Link to={"#"} className="menu-link">
              brush
            </Link>
            <Box className="dropdown-menu">
              <Link to={"#"} className="dropdown-items">
                face
              </Link>
              <Link to={"#"} className="dropdown-items">
                eyes
              </Link>
            </Box>
          </Box>
        </li>

        <li>offers</li>
        <li>stores</li> */}
      </ul>
    </div>
  );
};

export default SubNavbar;
