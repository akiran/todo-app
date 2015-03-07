var Todo = React.createClass({
  getInitialState: function () {
    return { 
      todos: [],
    }
  },
  addTodo: function (todo) {
    var todos = this.state.todos.concat(todo);
    this.setState({todos: todos});
  },
  updateTodo: function (todo, index) {
    var todos = this.state.todos;
    todos[index] = todo;
    this.setState({todos: todos});
  },
  destroyTodo: function (index) {
    var todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos: todos});
  },
  render: function () {
    return (
      <div id='todoapp'>
        <TodoForm 
          addTodo={this.addTodo}
        />
        <TodoList 
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          destroyTodo={this.destroyTodo}
        />
      </div>
    );
  }
});

React.render(<Todo />, document.body);