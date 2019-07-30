import React from "react";
import Layout from "./Layout";
import NavCalendar from "./NavCalendar";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ViewMonth = ({ match }) => {
  const { year } = match.params;
  const arrNbMonth = [...Array(12).keys()];

  return (
    <Layout>
      <NavCalendar />
      <div className="calendar-container">
        {arrNbMonth.map((nbMonth, index) => {
          const monthName = dayjs()
            .month(nbMonth)
            .format("MMMM");

          const isFutureMonth =
            dayjs().year() === Number(year) &&
            dayjs().month() + 1 <
              Number(
                dayjs()
                  .month(nbMonth)
                  .format("M")
              );

          return (
            <div
              className={`month-container ${isFutureMonth && `disabled-card`}`}
              key={index}
            >
              {!isFutureMonth ? (
                <Link className="link-card" to={`${match.url}/${nbMonth + 1}`}>
                  {monthName}
                </Link>
              ) : (
                <span className="link-card">{monthName}</span>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ViewMonth;
