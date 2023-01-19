import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  // ListItemIcon,
  // Box,
  // CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

import useStyles from "./styles";

const blueLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const DemoCategories = [
  { label: "Comady", value: "popular" },
  { label: "Horror", value: "horror" },
  { label: "Action", value: "action" },
  { label: "Mistry", value: "mistry" },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                  alt=""
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {DemoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                  alt=""
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
