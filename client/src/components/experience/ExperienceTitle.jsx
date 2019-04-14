import React from "react";

const ExperienceTitle = props => {
  const { experience } = props;
  return (
    <h2>
      <img
        className="ui mini spaced left image"
        src={`/${experience.image}`}
        alt={experience.image}
      />
      {experience.title}
    </h2>
  );
};

export default ExperienceTitle;
