import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const Calendar = ({ match }) => {
  const arrNbMonth = [...Array(12).keys()];

  return (
    <Layout>
      <div className="calendar-container">
        {arrNbMonth.map((nbMonth, index) => {
          const monthName = dayjs()
            .month(nbMonth)
            .format("MMMM");

          return (
            <div className="month-container" key={index}>
              <Link className="link-card" to={`${match.url}/${nbMonth}`}>
                {monthName}
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Calendar;
