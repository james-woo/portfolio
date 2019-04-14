import React, { Component } from "react";

export default class EditController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing
    };
  }

  onEdit = () => {
    const { editing } = this.state;
    const { onEdit } = this.props;
    this.setState({
      editing: !editing
    });
    onEdit();
  };

  onSave = async () => {
    const { onSave } = this.props;
    onSave();
  };

  onDelete = () => {
    const { onDelete } = this.props;
    onDelete();
  };

  onMoveUp = () => {
    const { onMoveUp } = this.props;
    onMoveUp();
  };

  onMoveDown = () => {
    const { onMoveDown } = this.props;
    onMoveDown();
  };

  render() {
    const { editing } = this.state;
    return (
      <div>
        <div className="ui small basic bottom icon buttons">
          <button
            type="button"
            className="ui icon button"
            onClick={this.onEdit}
          >
            <i className="edit icon" />
          </button>
          <button
            type="button"
            className="ui button"
            onClick={this.onSave}
            disabled={!editing}
          >
            <i className="save icon" />
          </button>
          {editing && (
            <button
              type="button"
              className="ui button"
              onClick={this.onDelete}
              disabled={!editing}
            >
              <i className="close icon" />
            </button>
          )}
          <button type="button" className="ui button" onClick={this.onMoveUp}>
            <i className="angle up icon" />
          </button>
          <button type="button" className="ui button" onClick={this.onMoveDown}>
            <i className="angle down icon" />
          </button>
        </div>
      </div>
    );
  }
}
