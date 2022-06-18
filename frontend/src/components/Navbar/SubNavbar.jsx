import { Box } from "@mui/material";
import React from "react";
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
      cate: ["face brushes", "eyes brushes"],
    },
    {
      title: "skincare",
      cate: [
        "moisturizer",
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
        {data.map((item) => {
          return (
            <li key={item.title}>
              <Box className="menu">
                <div className="menu-link">
                  <Link to={`/product/${item.title}`} className="link">
                    {item.title}
                  </Link>
                  <Box className={`dropdown-menu`}>
                    {item.cate &&
                      item.cate.map((sub, index) => (
                        <Link
                          key={`${sub}-${Math.random()}`}
                          to={`/product/${item.title}/${sub}`}
                          className="dropdown-items"
                        >
                          {sub}
                        </Link>
                      ))}
                  </Box>
                </div>
              </Box>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubNavbar;
