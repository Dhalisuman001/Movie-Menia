import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Title from "./Title";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import Button from "./Button";
import { useState } from "react";
import Popup from "./Popup";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Title />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ margin: "0px 20px" }}>
            <NavLink href="#features">Movies</NavLink>
            <NavLink href="#pricing">Series</NavLink>
            <NavLink href="#pricing">Animation</NavLink>
            <NavLink href="#pricing">Genres</NavLink>
          </Nav>
          <Nav className="l-auto" style={{ margin: "0px 20px" }}>
            <AiOutlineSearch
              color="white"
              size={30}
              onClick={handleShow}
              style={{ marginRight: "20px" }}
            />
            <Button variant="danger">Danger</Button>
            <RiAccountCircleFill
              color="white"
              size={30}
              style={{ paddingTop: "5px" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Popup show={show} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
