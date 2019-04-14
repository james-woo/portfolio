import React from "react";
import Moment from "moment";

const ExperienceDate = props => {
  const { experience } = props;
  const startDate = Moment(experience.start_time).format("MMMM YYYY");
  const endDate =
    experience.end_time == null
      ? "Current"
      : Moment(experience.end_time).format("MMMM YYYY");
  return <p>{`${startDate} - ${endDate}`}</p>;
};

export default ExperienceDate;
