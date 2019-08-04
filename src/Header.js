import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const Header = () => {
  return (
    <header className="header-app">
      <h1>
        <Link className="link-card" to={`/`}>
          Journal
        </Link>
      </h1>
      <nav className="navigation-app">
        <ul>
          <li>
            <Link
              className="link-card"
              to={`/calendar/${dayjs().year()}/${dayjs().month()}`}
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              className="link-card"
              to={`/calendar/${dayjs().year()}/${dayjs().month()}/${dayjs().date()}`}
            >
              Write
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
