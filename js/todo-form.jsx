TodoForm = React.createClass({
  getInitialState: function () {
    return { title: "" }
  },
  changeHandler: function (event) {
    this.setState({title: event.target.value});
  },
  keyDownHandler: function (event) {
    if (event.key === 'Enter' && event.target.value) {
      this.props.addTodo({
        title: event.target.value,
        completed: false
      });
      // Clearing form
      this.setState({title: ""});
    }
  },
  render: function () {
    return (
      <div>
        <input 
          type='text'
          id='new-todo'
          value={this.state.title}
          placeholder='What needs to be done ?'
          onChange={this.changeHandler}
          onKeyDown={this.keyDownHandler}
          autoFocus={true}
        />
      </div>
    );
  }
});