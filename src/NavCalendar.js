import React from "react";
import { Link, withRouter } from "react-router-dom";
import dayjs from "dayjs";

const NavCalendar = ({ match }) => {
  const { year, month } = match.params;

  const leftPath = month
    ? `/calendar/${Number(month) === 1 ? Number(year) - 1 : year}/${dayjs()
        .month(month - 1)
        .subtract(1, "month")
        .format("M")}`
    : `/calendar/${Number(year) - 1}`;

  const rightPath = month
    ? `/calendar/${Number(month) === 12 ? Number(year) + 1 : year}/${dayjs()
        .month(month - 1)
        .add(1, "month")
        .format("M")}`
    : `/calendar/${Number(year) + 1}`;

  const isCurrentYear = dayjs().year() === Number(year);

  const isDisabledRight =
    (dayjs().month() + 1 === Number(month) && isCurrentYear) ||
    (!month && isCurrentYear);

  return (
    <div className="navigation-calendar">
      <div>
        {month ? (
          <span>
            {year} -{" "}
            {dayjs()
              .month(month - 1)
              .format("MMMM")}
          </span>
        ) : (
          <span>{year}</span>
        )}
      </div>
      <nav className="navigation-content">
        <Link to={leftPath}>left</Link>
        <Link className={isDisabledRight && `disabled-link`} to={rightPath}>
          right
        </Link>
      </nav>
    </div>
  );
};

export default withRouter(NavCalendar);
