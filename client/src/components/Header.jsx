import React from "react";

const Header = props => {
  const { header, controlsHidden, onAddExperience } = props;
  return (
    <div className="ui center aligned header">
      <h1>
        {header}
        {!controlsHidden && (
          <button
            type="button"
            style={{ marginLeft: "0.3em" }}
            className="circular huge ui icon button"
            onClick={onAddExperience}
          >
            <i className="plus icon" />
          </button>
        )}
      </h1>
    </div>
  );
};

export default Header;
