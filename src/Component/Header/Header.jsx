import React from "react";
import logon from "../../logon.png";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function Header() {
  return (
    <div>
      <nav className="header">
        <img src={logon} alt="" />
        <div>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recent</Link>
          <Link to="/mylist">My List</Link>
        </div>
        <ImSearch />
      </nav>
    </div>
  );
}

export default Header;
