import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
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
    const { editing } = this.props === undefined ? false : this.props;
    const { content } = this.state;
    return (
      <div>
        {!editing && <ReactMarkdown source={content} />}
        {editing && (
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
        )}
      </div>
    );
  }
}
