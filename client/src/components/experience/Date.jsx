import React from "react";
import Moment from "moment";

const Date = props => {
  const { experienceable } = props;
  const startDate = Moment(experienceable.start_time).format("MMMM YYYY");
  const endDate =
    experienceable.end_time == null
      ? "Current"
      : Moment(experienceable.end_time).format("MMMM YYYY");
  return <p>{`${startDate} - ${endDate}`}</p>;
};

export default Date;
