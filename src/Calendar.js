import React from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const arrNbMonth = [...Array(12).keys()];

  return (
    <div>
      month:
      {arrNbMonth.map((nbMonth, index) => {
        const monthName = dayjs()
          .month(nbMonth)
          .format("MMMM");

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
          <p key={index}>
            {monthName}-
            {arrNbDay.map((nbDay, index) => (
              <span key={index}>
                {dayjs()
                  .month(nbMonth)
                  .date(nbDay)
                  .format("dddd")}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

export default Calendar;
