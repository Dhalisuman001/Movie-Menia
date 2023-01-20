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
import { Menu, Brightness7, Brightness4 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./Styles";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/slices/UserSlice";

const Navbar = () => {
  const style = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

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
            {!user ? (
              <Button
                color="inherit"
                onClick={() => dispatch(userLoginAction())}
              >
                Login &nbsp; <FcGoogle size={25} />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={style.linkButton}
              >
                {!isMobile && <>{user?.displayName} &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={user?.photoURL}
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
