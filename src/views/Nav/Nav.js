import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Navgigation extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>
        {/* <a className="active" href="/">
          Home
        </a>
        <a href="/todos">Todos</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}

export default Navgigation;
