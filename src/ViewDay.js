import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ViewDay = ({ match }) => {
  const nbMonth = match.params.month;

  const startMonth = dayjs()
    .month(nbMonth)
    .startOf("month")
    .format("D");

  const endMonth = dayjs()
    .month(nbMonth)
    .endOf("month")
    .format("D");

  const arrNbDay = [...Array(endMonth - startMonth).keys()];

  return (
    <Layout>
      <div className="calendar-container">
        {arrNbDay.map((nbDay, index) => {
          const dayName = dayjs()
            .month(nbMonth)
            .date(nbDay + 1)
            .format("dddd");

          const dayNumber = dayjs()
            .month(nbMonth)
            .date(nbDay + 1)
            .format("D");

          return (
            <div className="day-container" key={index}>
              <Link className="link-card" to={`${match.url}/${nbDay + 1}`}>
                <span>{dayNumber}</span>
                <span>{dayName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ViewDay;
