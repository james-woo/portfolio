import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Editor from "./Editor";
import Markdown from "./Markdown";

export default class MarkdownEditor extends Component {
  constructor (props) {
    super(props);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      id: props.id,
      content: props.content,
      controlsHidden: props.controlsHidden === undefined ? true : props.controlsHidden,
      editing: props.editing === undefined ? false : props.editing,
      service: props.service,
      onChange: props.onChange
    };
  }

  handleMarkdownChange(e) {
    this.setState({content: e});
    
    if (this.props.onChange !== undefined) {
      var event = {
        target: {
          value: e,
          id: this.state.id
        }
      };
      this.props.onChange(event);
    }
  }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  async save() {
    this.toggleEdit();
    this.state.service.update(this.state.id, this.state.content);
  }

  delete() {
    this.state.service.delete(this.state.id);
    window.location.reload();
  }

  render() {
    return (
      <div>
          {
            !this.state.editing &&
            <ReactMarkdown source={this.state.content} />
          }
          {
            this.state.editing && 
            <div>
              <div className="ui equal width grid">
                <div className="column">
                  <Editor value={this.state.content} onChange={this.handleMarkdownChange} />
                </div>
                <div className="column">
                  <Markdown source={this.state.content} />
                </div>
              </div>
            </div>
          }
          {
            !this.state.controlsHidden &&
            <div>
              <div className="ui small basic bottom icon buttons">
                <button className="ui icon button" onClick={this.toggleEdit}>
                  <i className="edit icon"></i>
                </button>
                <button className="ui button" onClick={this.save} disabled={!this.state.editing}>
                  <i className="save icon"></i>
                </button>
                { this.state.editing &&
                  <button className="ui button" onClick={this.delete} disabled={!this.state.editing}>
                    <i className="close icon"></i>
                  </button>
                }
              </div>
            </div>
          }
      </div>
    );
  }
}
