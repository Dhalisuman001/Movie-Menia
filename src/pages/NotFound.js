import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const NotFound = () => {
  return (
    <body class="bg-purple">
      <div class="central-body">
        <img
          class="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px"
          alt=""
        />
        <Link to={"/"} class="btn-go-home">
          GO BACK HOME
        </Link>
      </div>
      <div class="objects">
        <img
          class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
          alt=""
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
            alt=""
          />
          <img
            class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
            alt=""
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt=""
          />
        </div>
      </div>
      <div class="glowing_stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </body>
  );
};

export default NotFound;
