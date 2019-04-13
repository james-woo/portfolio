import React, { Component } from "react";
import Editor from "./Editor";
import Markdown from "./Markdown";

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content
    };
  }

  onChange = e => {
    this.setState({ content: e.target.value });
    const { onChange } = this.props;
    if (onChange !== undefined) {
      onChange({ target: { value: e.target.value } });
    }
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <div className="ui equal width grid">
          <div className="column">
            <Editor value={content} onChange={this.onChange} />
          </div>
          <div className="column">
            <Markdown source={content} />
          </div>
        </div>
      </div>
    );
  }
}
