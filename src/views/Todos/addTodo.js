// npm install --save-exact react-toastify@8.0.2
import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Please select a title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.title}
          type="text"
          onChange={(e) => {
            this.onChangeTitle(e);
          }}
        />
        <button
          onClick={() => this.handleAddTodo()}
          className="add"
          type="button"
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddTodo;
