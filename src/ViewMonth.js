import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ViewMonth = ({ match }) => {
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
              <Link className="link-card" to={`${match.url}/${nbMonth + 1}`}>
                {monthName}
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ViewMonth;
