import React from "react";
import { LinkStyled, NavList } from "./NavbarStyle";

const LINK = [
  { to: "/", text: "Home" },
  { to: "/watchlist", text: "WatchList" },
];

const Navbar = () => {
  return (
    <div>
      <NavList>
        {LINK.map((item) => (
          <li key={item.to}>
            <LinkStyled to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;
