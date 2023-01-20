import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Navigate } from "react-router";

function Profile() {
  const { user } = useSelector((state) => state.userAuth);
  const style = useStyles();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    return <Navigate to={"/"} />;
  };

  return (
    <Box className={style.container}>
      <Avatar
        alt="Remy Sharp"
        src={user?.photoURL}
        sx={{ width: 150, height: 150 }}
      />
      <Typography fontSize={25} fontWeight="bolder">
        {user?.displayName}
      </Typography>
      <Typography fontSize={10} fontWeight="bold">
        Mail: {user?.email}
      </Typography>
      <span style={{ marginTop: "20px" }}>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </span>
    </Box>
  );
}

export default Profile;
