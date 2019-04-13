import React, { Component } from "react";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      isControlled: Boolean(value)
    };
    this.handleChange = this.handleChange.bind(this);
    this.editorRef = React.createRef();
  }

  componentDidUpdate() {
    const { value } = this.props;
    if (!this.editor) {
      return;
    }

    if (value) {
      if (this.editor.getValue() !== value) {
        this.editor.setValue(value);
      }
    }
  }

  handleChange() {
    const { value, onChange } = this.props;
    const { isControlled } = this.state;
    if (!this.editor) {
      return;
    }

    const editorValue = this.editor.getValue();
    if (editorValue === value) {
      return;
    }

    if (onChange) {
      onChange({ target: { value: editorValue } });
    }

    if (this.editor.getValue() !== value) {
      if (isControlled) {
        this.editor.setValue(value);
      } else {
        this.props.value = editorValue;
      }
    }
  }

  render() {
    const {
      value,
      readOnly,
      defaultValue,
      onChange,
      textAreaClassName
    } = this.props;
    const textAreaStyle = {
      border: "none",
      backgroundColor: "#272822",
      color: "white",
      padding: "1rem",
      boxShadow: "2px 2px 0px 0px #eee"
    };
    return (
      <div className="ui form">
        <div className="field">
          <textarea
            style={textAreaStyle}
            ref={this.editorRef}
            value={value}
            readOnly={readOnly}
            defaultValue={defaultValue}
            onChange={onChange}
            className={textAreaClassName}
          />
        </div>
      </div>
    );
  }
}
