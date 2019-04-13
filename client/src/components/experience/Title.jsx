import React from "react";

const Title = props => {
  const { experienceable } = props;
  return (
    <h2>
      <img
        className="ui mini spaced left image"
        src={`/${experienceable.image}`}
        alt={experienceable.image}
      />
      {experienceable.title}
    </h2>
  );
};

export default Title;
