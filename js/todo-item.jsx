var TodoItem = React.createClass({
  getInitialState: function () {
    return { edit: false }
  },
  toggleHandler: function () {
    var todo = this.props.todo;
    todo.completed = !todo.completed;
    this.props.updateTodo(todo, this.props.index)
  },
  handleEdit: function () {
    this.setState({edit: true});
  },
  destroyHandler: function () {
    this.props.destroyTodo(this.props.index);
  },
  handleSubmit: function () {
    this.props.updateTodo(this.props.todo, this.props.index)
    this.setState({edit: false});
  },
  handleKeyDown: function (event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  },
  handleChange: function (event) {
    var todo = this.props.todo;
    todo.title = event.target.value;
    this.props.updateTodo(todo, this.props.index);
  },
  render: function () {
    var classes = React.addons.classSet({
      completed: this.props.todo.completed,
      editing: this.state.edit
    })
    return (
      <li className={classes}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.toggleHandler}
          />
          <label onDoubleClick={this.handleEdit}>
            {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.destroyHandler} />
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.props.todo.title}
          onBlur={this.handleSubmit}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          />
      </li>
    );
  }
});
