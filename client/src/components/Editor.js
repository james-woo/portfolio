import React, { Component } from "react";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isControlled: Boolean(this.props.value)
    };
    this.handleChange = this.handleChange.bind(this);
    this.editorRef = React.createRef();
  }

  componentDidUpdate() {
    if (!this.editor) {
      return;
    }

    if (this.props.value) {
      if (this.editor.getValue() !== this.props.value) {
        this.editor.setValue(this.props.value);
      }
    }
  }

  handleChange() {
    if (!this.editor) {
      return;
    }

    const value = this.editor.getValue()
    if (value === this.props.value) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange({target: {value: value}});
    }

    if (this.editor.getValue() !== this.props.value) {
      if (this.state.isControlled) {
        this.editor.setValue(this.props.value);
      } else {
        this.props.value = value;
      }
    }
  }

  render() {
    const textAreaStyle = {
      border: "none",
      backgroundColor: "#272822",
      color: "white",
      padding: "1rem",
      boxShadow: "2px 2px 0px 0px #eee"
    }
    return(
      <div className="ui form">
        <div className="field">
          <textarea 
            style={textAreaStyle}
            ref={this.editorRef}
            value={this.props.value}
            readOnly={this.props.readOnly}
            defaultValue={this.props.defaultValue}
            onChange={this.props.onChange}
            className={this.props.textAreaClassName}
          />
        </div>
      </div>
    );
  }
}