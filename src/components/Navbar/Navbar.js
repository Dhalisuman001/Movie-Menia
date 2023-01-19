import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness7,
  Brightness4,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./Styles";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

const Navbar = () => {
  const style = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = false;
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={style.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {
                setMobileOpen((preState) => !preState);
              }}
              className={style.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={style.linkButton}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw0W9AaIyUv1VotESkH8uQjQ&ust=1674140633008000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPinjIGy0fwCFQAAAAAdAAAAABAE`}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={style.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((preState) => !preState)}
              classes={{ paper: style.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: style.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
