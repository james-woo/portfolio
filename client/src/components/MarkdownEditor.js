import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Cookies } from 'react-cookie';
import Editor from "./Editor";
import Markdown from "./Markdown";

export default class MarkdownEditor extends Component {
  constructor (props) {
    super(props);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.toggleHideMarkdown = this.toggleHideMarkdown.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.state = {
      markdownContent: props.content,
      markdownHidden: true,
      controlsHidden: !new Cookies().get("j")
    };
  }

  handleMarkdownChange(event) {
    this.setState({markdownContent: event.target.value});
  }

  toggleHideMarkdown() {
    this.setState({
      markdownHidden: !this.state.markdownHidden
    })
  }

  save() {
    this.toggelHideMarkdown();
  }

  cancel() {
    this.toggelHideMarkdown();
  }

  render() {
    return (
      <div>
          {
            this.state.markdownHidden &&
            <ReactMarkdown source={this.state.markdownContent} />
          }
          {
            !this.state.markdownHidden && 
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
          {
            !this.state.controlsHidden &&
            <div>
              <div className="ui small basic bottom icon buttons">
              <button className="ui icon button" onClick={this.toggleHideMarkdown}>
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
          }
      </div>
    );
  }
}
