import React, { Component } from "react";
import CodeMirror from "react-codemirror";
require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
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
    const options = {
      lineNumbers: true,
      theme: "monokai",
      mode: "markdown"
    }
    return(
      <CodeMirror 
        defaultValue={this.props.defaultValue} 
        value={this.props.value} 
        onChange={this.props.onChange}
        options={options} />
    );
  }
}