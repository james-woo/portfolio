import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Editor from "./Editor";
import Markdown from "./Markdown";

export default class MarkdownEditor extends Component {
  constructor (props) {
    super(props);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.state = {
      markdownContent: props.content,
      isHidden: true
    };
  }

  handleMarkdownChange(event) {
    this.setState({markdownContent: event.target.value});
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  save() {
    this.toggleHidden();
  }

  cancel() {
    this.toggleHidden();
  }

  render() {
    return (
      <div>
          {this.state.isHidden &&
            <ReactMarkdown source={this.state.markdownContent} />
          }
          {!this.state.isHidden && 
            <div>
              <div className="ui equal width grid">
                <div className="column">
                  <Editor value={this.state.markdownContent} onChange={this.handleMarkdownChange} />
                </div>
                <div className="column">
                  <Markdown source={this.state.markdownContent} />
                </div>
              </div>
            </div>
          }
          <div className="ui small basic bottom icon buttons">
            <button className="ui icon button" onClick={this.toggleHidden}>
              <i className="edit icon"></i>
            </button>
            <button className="ui button" onClick={this.save}>
              <i className="save icon"></i>
            </button>
            <button className="ui button" onClick={this.cancel}>
              <i className="cancel icon"></i>
            </button>
          </div>
      </div>
    );
  }
}
