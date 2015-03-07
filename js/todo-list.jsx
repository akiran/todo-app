var TodoList = React.createClass({
  render: function () {
    var todoNodes = this.props.todos.map(function (todo, index) {
      return (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            {...this.props}
          />
      )
    }.bind(this))
    return (
      <ul id="todo-list">
        {todoNodes}
      </ul>
    );
  }
});