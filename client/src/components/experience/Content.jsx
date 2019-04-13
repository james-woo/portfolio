import React from "react";
import ReactMarkdown from "react-markdown";

const Content = props => {
  const { experienceable } = props;
  return <ReactMarkdown source={experienceable.content} />;
};

export default Content;
