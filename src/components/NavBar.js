import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact={true} activeStyle={{ fontWeight: "bold" }} to="/">
        Home Page
      </NavLink>

      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About Page
      </NavLink>

      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover page
      </NavLink>
    </div>
  );
}
