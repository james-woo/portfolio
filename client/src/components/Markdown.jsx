import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = props => {
  const { source } = props;
  const markdownAreaStyle = {
    border: "none",
    backgroundColor: "#efefef",
    overflowY: "hidden",
    padding: "0.5rem",
    resize: "none",
    boxShadow: "2px 2px 0px 0px #eee",
    width: "100%",
    height: "100%"
  };
  return (
    <div style={markdownAreaStyle}>
      <ReactMarkdown source={source} />
    </div>
  );
};

export default Markdown;
