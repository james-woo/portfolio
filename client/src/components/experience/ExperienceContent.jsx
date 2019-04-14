import React from "react";
import ReactMarkdown from "react-markdown";

const ExperienceContent = props => {
  const { experience } = props;
  return <ReactMarkdown source={experience.content} />;
};

export default ExperienceContent;
